const { gql } = require("apollo-server");

const typeDefs = gql`
    type Cat {
        id: String
        catName: String
        description: String
        imageURL: String
        rating: Int
    }
    type Query {
        cats: [Cat]
        cat(id: String!): Cat
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
        updateCat(
            id: String
            catName: String
            description: String
            imageURL: String
            rating: Int
        ): Cat
    }
`;

module.exports = typeDefs;