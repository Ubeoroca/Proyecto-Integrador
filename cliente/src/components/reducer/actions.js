import axios from "axios";
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionsTypes";
const endpoint = "http://localhost:3001/rickandmorty/fav";

export const addFavorite = (character) => {
  return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: ADD_FAVORITE,
           payload: data,
        });
     });
  };
};

export const deleteFavorite = (id) => {
  return (dispatch) => {
    axios.delete(`${endpoint}/${id}`).then(({ data }) => {
      return dispatch({
        type: DELETE_FAVORITE,
        payload: data,
      });
    });
  };
};

export function filterCards(gender) {
    return {
      type: FILTER,
      payload: gender,
    };
  }
  
  export function orderCards(order) {
    return {
      type: ORDER,
      payload: order,
    };
  }