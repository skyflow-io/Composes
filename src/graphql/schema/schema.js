const graphql = require('graphql'), { GraphQLObjectType, GraphQLSchema } = graphql;

const BookRootFields = require("./BookSchema").BookRootFields;
const AuthorRootFields = require("./AuthorSchema").AuthorRootFields;

let fields = Object.assign({}, BookRootFields, AuthorRootFields);

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields
});

module.exports = new GraphQLSchema({
    query: RootQuery
});