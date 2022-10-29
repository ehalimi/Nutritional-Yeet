const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User{
    _id: ID
    username: String
    email: String
    foodCount: Int
    savedFoods: [Food]
}
type Food{
    foodId: String
    description: String
    calories: [String]
    name: String
    image: String
    link: String
}
input newFood {
    calories: [String]
    foodId: String
    description: String
    name: String
    image: String
    link: String
}
type Auth {
    token: ID!
    user: User
}
type Query {
    users: [User]
    me: User
    }
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveFood(content: newFood!): User
    removeFood(foodId: String!): User
}`;

module.exports = typeDefs;