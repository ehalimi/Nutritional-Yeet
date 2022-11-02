import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }`

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }`

export const SAVE_FOOD = gql`
    mutation saveFood($content: newFood!) {
        saveFood(content: $content) {
            _id
            username
            email
            foodCount
            savedFoods {
                foodId
                query
                items
            }
        }
    }`
    
export const REMOVE_FOOD= gql`
    mutation RemoveFood($foodId: String!) {
        removeFood(foodId: $foodId) {
            username
            foodCount
            savedFoods {
                foodId
            }
        }
    }`