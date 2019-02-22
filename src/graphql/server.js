const express = require("express"),
    graphqlHTTP = require("express-graphql"),
    cors = require("cors"),
    vhost = require("vhost"),
    schema = require("./schema/schema");

const app = express();

// Allow cross-origin requests
app.use(cors());

// Virtual host
app.use(vhost(process.env.GRAPHQL_HOST, express.static("./")));

app.use("/" + process.env.GRAPHQL_ENDPOINT, graphqlHTTP({
    schema,
    graphiql: process.env.GRAPHQL_ENV === "dev",
}));

app.listen(80);