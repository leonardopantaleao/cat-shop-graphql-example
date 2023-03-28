const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        firstName: String
        lastName: String
        email: String
    }
    type Cat {
        id: String
        catName: String
        description: String
        imageURL: String
        rating: Int
    }
    type Query {
        users: [User]
        cats: [Cat]
    }
    type Mutation {
        addCat(
            id: String
            catName: String
            description: String
            imageURL: String
            rating: Int
        ): Cat
        removeCat(
            id: String
        ): Boolean
    }
`;

module.exports = typeDefs;