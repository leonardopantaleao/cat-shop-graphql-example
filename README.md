# cat-shop-graphql-example
Cat shop example for GraphQL usage

This repository shows an example of how to create an ApolloServer to operate on a Firebase Realtime Database with GraphQL, implemented in JS.

For development it is advised to install Visual Studio Code.

You will need as package manager yarn. It's also recommended to have homebrew and npm installed.

After cloning the repo you should run the following command:

yarn add apollo-server apollo-server-express dotenv express firebase-admin graphql

Afer everything is set run

yarn start

For security reasons the Firebase service account json file was removed, place it in src folder with your own service account json file.
