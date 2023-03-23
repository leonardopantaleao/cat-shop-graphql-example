const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        firstName: String
        lastName: String
        email: String
    }
    type Query {
        users: [User]
    }
`;

module.exports = typeDefs;