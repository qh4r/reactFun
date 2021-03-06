import {
  GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList, GraphQLObjectType, GraphQLInputObjectType, GraphQLNonNull,
  GraphQLID
} from 'graphql';
import {
  ObjectId
} from "mongodb"
// connection argsy automatycznie dodaja edge,nody,kursory,paginacje
import {
  connectionDefinitions,
  connectionArgs,
  connectionFromPromisedArray, mutationWithClientMutationId, globalIdField
} from 'graphql-relay'

let store = {links: []};

const data = {
  counter: 1337,
  numbersArray: [34, 32, 5, 12, 1, 451],
  peopleArray: [{name: "Rafał", age: 25}, {name: "Asia", age: 18}]
}

const PersonType = new GraphQLObjectType({
  name: "Person",
  fields: () => ({
    name: {type: GraphQLString},
    age: {type: GraphQLInt}
  })
});

// realay z connectionami wymaga pola id non nullable a nie _id
const LinkType = new GraphQLObjectType({
  name: "Link",
  fields: () => ({
    // _id: {type: GraphQLString},
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: (obj) => obj._id // mapowanie
    },
    title: {type: GraphQLString},
    url: {type: GraphQLString}
  })
})

const LinkInputType = new GraphQLInputObjectType({
  name: "LinkInput",
  fields: () => ({
    title: {type: GraphQLString},
    url: {type: GraphQLString}
  })
});

let schemaInstance;

export const getSchema = (db) => {

  let LinkConnection = connectionDefinitions({
    name: 'Link',
    nodeType: LinkType
  })

  // potrzebujemy takiego roota by zachowac hirarchie wymagana przez Relay
  const StoreType = new GraphQLObjectType({
    name: "Store",
    fields: () => ({
      id: globalIdField("Store"),
      links: {
        type: new GraphQLList(LinkType),
        resolve: () => db.collection("links").find({}).toArray()
      },
      linkConnection: {
        type: LinkConnection.connectionType,
        args: connectionArgs,
        //uzywana do resolve funkcja roznic sie bedzie w zaleznosci od typu danych ktore tu mamy
        resolve: (_, args) => {
          console.log(args, _)
          return connectionFromPromisedArray(
            db.collection("links").find({}).toArray(), // bez tego first na mongo tez by dzialalo ale pobieralo by z mongo i tak calosc
            args
          )
        }
      }
    })
  });

  let createLinkMutation = mutationWithClientMutationId({
    name: "CreateLink",
    inputFields: {
      title: {type: new GraphQLNonNull(GraphQLString)},
      url: {type: new GraphQLNonNull(GraphQLString)}
    },
    outputFields: {
      linkEdge: {
        // type: LinkType,
        type: LinkConnection.edgeType,
        resolve: (obj) => {
          console.log(obj);
          return {node: obj.ops[0], cursor: obj.insertedId };
        }
      },
      store: {
        type: StoreType,
        resolve: () => store
      }
    },
    // to dostaje input jako 1 argument
    mutateAndGetPayload: ({title, url}) =>
      db.collection('links').insertOne({title, url})
  });

  schemaInstance = schemaInstance || new GraphQLSchema({
      query: new GraphQLObjectType({
        name: "Query",
        fields: () => ({
          number: { // odwolamy sie przez http://127.0.0.1:3000/graphql?query={a_number}
            type: GraphQLInt, // kazdy zwracany obiekt musi miec typ
            resolve: () => data.counter
          },
          secret: {
            type: GraphQLString,
            resolve: () => "to tajemnica"
          },
          numbersArray: {
            type: new GraphQLList(GraphQLInt),
            resolve: () => data.numbersArray
          },
          peopleArray: {
            type: new GraphQLList(PersonType),
            resolve: () => data.peopleArray
          },
          store: {
            type: StoreType,
            resolve: () => store
          }
          // links: {
          //   type: new GraphQLList(LinkType),
          //   resolve: () => db.collection("links").find({}).toArray() // wrecz nie mozna samemu obsluzyc promisa
          //   // graph ql sam sie tym zajmuje
          // }
        })
      }),

      mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: () => ({
          incrementNumber: {
            type: GraphQLInt,
            resolve: () => ++data.counter
          },
          decrementNumber: {
            type: GraphQLInt,
            resolve: () => --data.counter
          },
          insertLink: {
            type: GraphQLString,
            args: {
              link: {
                type: LinkInputType
              }
            },
            resolve: (value, {link: {url, title}}) => db.collection('links').insertOne({url: url, title: title})
          },
          removeLink: {
            type: GraphQLString,
            args: {
              id: {
                type: GraphQLString
              }
            },
            resolve: (value, {id}) => db.collection('links').deleteOne({_id: ObjectId(id)})
          },
          // RELAYOWE
          createLink: createLinkMutation
        })
      })
    });

  return schemaInstance;
}

// fragmety pozwalaja na reuzywanie agregacji w query
//fragment xxx on {aggregation} {
// uzycie fragmentu ...xxx




// tworzenie mutacji:
// mutation CreateLinkMutation($input: CreateLinkInput!) {
//   createLink(input: $input) {
//     clientMutationId,
//       link {
//       id,
//         title,
//         url
//     }
//   }
// }

// i jako query variables przekazujemy json
// {
//   "input": {
//   "clientMutationId": "3242", // dowolny ciag - relay tu rpzekazuje losowy guid
//     "title": "nowy",
//     "url": "testy.org"
//  }
// }