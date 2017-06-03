import {
  GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList, GraphQLObjectType, GraphQLInputObjectType
} from 'graphql';
import {
  ObjectId
} from "mongodb"

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

const LinkType = new GraphQLObjectType({
  name: "Link",
  fields: () => ({
    _id: {type: GraphQLString},
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
          links: {
            type: new GraphQLList(LinkType),
            resolve: () => db.collection("links").find({}).toArray() // wrecz nie mozna samemu obsluzyc promisa
            // graph ql sam sie tym zajmuje
          }
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
          }
        })
      })
    });

  return schemaInstance;
}

// fragmety pozwalaja na reuzywanie agregacji w query
//fragment xxx on {aggregation} {
// uzycie fragmentu ...xxx