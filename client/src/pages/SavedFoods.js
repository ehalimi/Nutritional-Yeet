import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { REMOVE_FOOD } from '../utils/mutation';

import Auth from '../utils/auth';
import { removeFoodId } from '../utils/localStorage';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

const SavedFoods = () => {

  const { loading, data} = useQuery(GET_ME)
  const userData = data?.me || {}
  
  const [deleteFood] = useMutation(REMOVE_FOOD, {
    update(cache) {
      try {
        const { me } = cache.readQuery({ query: GET_ME})
        cache.modify({
          id: cache.identify(me),
          fields: {
            SavedFoods({DELETE}) {
              return DELETE;
            }
          }
        })
    } catch (e) {
      console.warn("Something went wrong with cache update")
    }
}})

  // create function that accepts the food's mongo _id value as param and deletes the food from the database
  const handleDeleteFood = async (foodId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await deleteFood({
        variables: {foodId: foodId}
      })
      // upon success, remove food's id from localStorage
      removeFoodId(foodId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved foods!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.SavedFoods.length
            ? `Viewing ${userData.SavedFoods.length} saved ${userData.SavedFoods.length === 1 ? 'food' : 'foods'}:`
            : 'You have no saved foods!'}
        </h2>
        <CardColumns>
          {userData.SavedFoods.map((food) => {
            return (
              <Card key={food.foodId} border='dark'>
                {food.image ? <Card.Img src={food.image} alt={`The cover for ${food.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{food.title}</Card.Title>
                  <p className='small'>Authors: {food.authors}</p>
                  <Card.Text>{food.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteFood(food.foodId)}>
                    Delete this food!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedFoods;
