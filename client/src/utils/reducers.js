import { useReducer } from "react";
import {
    SAVE_FOOD,
    REMOVE_FOOD,
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        // if action type value is the value of `Update_FOODS`, return a new state object with an updated products array
        case SAVE_FOOD:
            return {
                ...state,
                foods: [...action.foods],
            };

        case REMOVE_FOOD:
            let newState = state.bag.filter((food) => {
                return food._id !== action._id
            })
            return {
                ...state,
                bagOpen: newState.length > 0,
                bag: newState,
            };


        default:
return state;
    }
};

export function useFoodReducer(initialState) {
    return useReducer(reducer, initialState);
}