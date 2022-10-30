import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
import { searchFoods } from '../utils/API';
import { saveFoodIds, getSavedFoodIds } from '../utils/localStorage';
import { SAVE_FOOD } from '../utils/mutation';
import { useMutation } from '@apollo/client';

const SearchFoods = () => {
  // create state for holding returned google api data
    const [searchedFoods, setSearchedFoods] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    // create state to hold saved FoodId values
    const [savedFoodIds, setSavedFoodIds] = useState(getSavedFoodIds());

    const [saveFood] = useMutation(SAVE_FOOD)
    // set up useEffect hook to save `savedFoodIds` list to localStorage on component unmount
    // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    useEffect(() => {
        return () => saveFoodIds(savedFoodIds);
    });

    // create method to search for Foods and set state on form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
        return false;
        }

        try {
        const response = await searchFoods(searchInput);

        if (!response.ok) {
            throw new Error('something went wrong!');
        }

        const { items } = await response.json();

        const foodData = items.map((food) => ({
            foodId: food.id,
            names: food.volumeInfo.names || ['No names to display'],
            calories: food.volumeInfo.calories,
            description: food.volumeInfo.description,
            image: food.volumeInfo.imageLinks?.thumbnail || '',
        }));

        setSearchedFoods(foodData);
        setSearchInput('');
        } catch (err) {
        console.error(err);
        }
    };

    // create function to handle saving a Food to our database
    const handleSaveFood = async (foodId) => {
        // find the Food in `searchedFoods` state by the matching id
        const foodToSave = searchedFoods.find((food) => food.foodId === foodId);

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
        return false;
        }

        try {
        await saveFood({
            variables: {content: foodToSave}
        })
        console.log("Food to save", foodToSave)
        // if Food successfully saves to user's account, save Food id to state
        setSavedFoodIds([...savedFoodIds, foodToSave.foodId]);
        } catch (err) {
        console.error(err);
        }
    };

    return (
        <>
        <Jumbotron fluid className='text-light bg-dark'>
            <Container>
            <h1>Search for Foods!</h1>
            <Form onSubmit={handleFormSubmit}>
                <Form.Row>
                <Col xs={12} md={8}>
                    <Form.Control
                    name='searchInput'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type='text'
                    size='lg'
                    placeholder='Search for a Food'
                    />
                </Col>
                <Col xs={12} md={4}>
                    <Button type='submit' variant='success' size='lg'>
                    Submit Search
                    </Button>
                </Col>
                </Form.Row>
            </Form>
            </Container>
        </Jumbotron>

        <Container>
            <h2>
            {searchedFoods.length
                ? `Viewing ${searchedFoods.length} results:`
                : 'Search for a Food to begin'}
            </h2>
            <CardColumns>
            {searchedFoods.map((food) => {
                return (
                <Card key={food.foodId} border='dark'>
                    {food.image ? (
                    <Card.Img src={food.image} alt={`The cover for ${food.calories}`} variant='top' />
                    ) : null}
                    <Card.Body>
                    <Card.Calories>{food.calories}</Card.Calories>
                    <p className='small'>Name: {food.names}</p>
                    <Card.Text>{food.description}</Card.Text>
                    {Auth.loggedIn() && (
                        <Button
                        disabled={savedFoodIds?.some((savedFoodId) => savedFoodId === food.foodId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveFood(food.foodId)}>
                        {savedFoodIds?.some((savedFoodId) => savedFoodId === food.foodId)
                            ? 'This Food has already been saved!'
                            : 'Save this Food!'}
                        </Button>
                    )}
                    </Card.Body>
                </Card>
                );
            })}
            </CardColumns>
        </Container>
        </>
    );
};

export default SearchFoods;