const graphql = require('graphql'),
    _ = require('lodash'),
    AuthorType = require('./AuthorSchema').AuthorType;

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

// Fake data
const books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2' },
    { name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
    { name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorId: '3' },
    { name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorId: '3' },
];

// Fake data
const authors = [
    { name: 'Patrick Rothfuss', age: 44, id: '1' },
    { name: 'Brandon Sanderson', age: 42, id: '2' },
    { name: 'Terry Pratchett', age: 66, id: '3' }
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args){
                // Here, you can get data from other source like database
                return _.find(authors, { id: parent.authorId });
            }
        }
    })
});

const BookRootFields = {
    book: {
        type: BookType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args){
            // Here, you can get data from other source like database
            return _.find(books, { id: args.id });
        }
    },
    books: {
        type: new GraphQLList(BookType),
        resolve(parent, args){
            // Here, you can get data from other source like database
            return books;
        }
    },
};

module.exports = {
    BookRootFields,
    BookType
};