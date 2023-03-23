const express = require("express");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();
const app = express();

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const firebaseClient = {
  apiKey: "AIzaSyD8PWAPX5KJYDhotuKOSIlOtFFTfg0Pp6U",
  authDomain: "catgraphql.firebaseapp.com",
  projectId: "catgraphql",
  storageBucket: "catgraphql.appspot.com",
  messagingSenderId: "326701206219",
  databaseURL: "https://catgraphql-default-rtdb.firebaseio.com",
  appId: "1:326701206219:web:2634f01be8dbd05eef294e"
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        return {
            headers: req.headers,
            firebaseClient
        };
    }
});
async function startServer() {
    let server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app, path: '/' });
}
startServer();

app.listen({ port: 4000 }, () => {
    console.log("Server has started http://localhost:4000/graphql");
});