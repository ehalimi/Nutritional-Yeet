import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
        }
        }
    }
`;

export const ADD_ORDER = gql`
    mutation addOrder($products: [ID]!) {
        addOrder(products: $products) {
        purchaseDate
        products {
            _id
            name
            description
            quantity
            category {
            name
            }
        }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
    ) {
        addUser(
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        ) {
        token
        user {
            _id
        }
        }
    }
`

// make a search to google fit api
// https://nutrition-api.esha.com/foods?query=${query} 
export const searchFoodInfo = async (query) => {
    return await fetch(`https://nutrition-api.esha.com/foods?query=${query}`);
};