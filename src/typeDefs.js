const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        firstName: String
        lastName: String
        email: String
    }
    type Cat {
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
            catName: String
            description: String
            imageURL: String
            rating: Int
        ): Cat
    }
`;

module.exports = typeDefs;