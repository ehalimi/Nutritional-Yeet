import { useReducer } from "react";
import {
    SAVE_FOOD,
    REMOVE_FOOD,
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
 
        // case ADD_TO_CART:
        //     return {
        //         ...state,
        //         cartOpen: true,
        //         cart: [...state.cart, action.product]
        //     };
        // case REMOVE_FROM_CART:
        //     let newState = state.cart.filter(product => {
        //         return product._id !== action._id;
        //     });
        //     return {
        //         ...state,
        //         cartOpen: newState.length > 0,
        //         cart: newState
        //     };
        // if it's none of these actions, do not update state at all and keep things the same
        default:
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}