import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me {
        _id
        email
        username
        savedFoods {
            query
            items
            foodId
        }
        }
    }
`;