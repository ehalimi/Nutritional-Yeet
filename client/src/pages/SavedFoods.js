import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
<<<<<<< HEAD
import { REMOVE_FOOD } from '../utils/mutations';
=======
import { REMOVE_FOOD } from '../utils/mutation';
>>>>>>> 88109a060fe21f5601dd60a92cac52790a9fde58

import Auth from '../utils/auth';
import { removeFoodId } from '../utils/localStorage';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

const SavedFoods = () => {

<<<<<<< HEAD
    const { loading, data } = useQuery(GET_ME)
    const userData = data?.me || {}

    const [deleteFood] = useMutation(REMOVE_FOOD, {
        update(cache) {
            try {
                const { me } = cache.readQuery({ query: GET_ME })
                cache.modify({
                    id: cache.identify(me),
                    fields: {
                        savedFoods({ DELETE }) {
                            return DELETE;
                        }
                    }
                })
            } catch (e) {
                console.warn("Something went wrong with cache update")
            }
        }
    })

    // create function that accepts the FOOD's mongo _id value as param and deletes the FOOD from the database
    const handleDeleteFood = async (foodId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            await deleteFood({
                variables: { foodId: foodId }
            })
            // upon success, remove FOOD's id from localStorage
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
                    <h1>Viewing saved Foods!</h1>
                </Container>
            </Jumbotron>
            <Container>
                <h2>
                    {userData.savedFoods.length
                        ? `Viewing ${userData.savedFoods.length} saved ${userData.savedFoods.length === 1 ? 'FOOD' : 'Foods'}:`
                        : 'You have no saved Foods!'}
                </h2>
                <CardColumns>
                    {userData.savedFoods.map((food) => {
                        return (
                            <Card key={food.foodId} border='dark'>
                                {food.image ? <Card.Img src={food.image} alt={`The cover for ${food.calories}`} variant='top' /> : null}
                                <Card.Body>
                                    <Card.Title>{food.calories}</Card.Title>
                                    <p className='small'>Name: {food.names}</p>
                                    <Card.Text>{food.description}</Card.Text>
                                    <Button className='btn-block btn-danger' onClick={() => handleDeleteFood(food.foodId)}>
                                        Delete this Food!
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
=======
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
>>>>>>> 88109a060fe21f5601dd60a92cac52790a9fde58
