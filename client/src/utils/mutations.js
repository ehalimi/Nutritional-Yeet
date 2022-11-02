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
// export const SAVE_FOOD = gql`
//   mutation saveFood()
// `;

// export const REMOVE_FOOD = gql`
//   mutation removeFood()
// `;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
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
}
;
