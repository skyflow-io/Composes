const graphql = require('graphql'),
    _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

// Fake data
const authors = [
    { name: 'Patrick Rothfuss', age: 44, id: '1' },
    { name: 'Brandon Sanderson', age: 42, id: '2' },
    { name: 'Terry Pratchett', age: 66, id: '3' }
];

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'Somebody that you used to know',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: {
            type: GraphQLString,
            resolve: author => author.name.toUpperCase()
        },
        age: { type: GraphQLInt },
    })
});

const AuthorRootFields = {
    author: {
        type: AuthorType,
        description: 'Root fields for Author.',
        args: { id: { type: GraphQLID } },
        resolve(parent, args){
            // Here, you can get data from other source like database
            return _.find(authors, { id: args.id });
        }
    },
    authors: {
        type: new GraphQLList(AuthorType),
        resolve(parent, args){
            // Here, you can get data from other source like database
            return authors;
        }
    }
};

module.exports = {
    AuthorRootFields,
    AuthorType
};
