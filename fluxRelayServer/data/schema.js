import {
  GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString
} from 'graphql';

const data = {
  counter: 1337
}

export const schema = new GraphQLSchema({
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
      }
    })
  })
});