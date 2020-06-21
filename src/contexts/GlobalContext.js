/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = { cities: [], results: [] };
const [state, dispatch] = useReducer(AppReducer, initialState);
export const GlobalContext = createContext(initialState);

// const searchIt = (query) => {
//   const results = [];
//   state.cities.map((c) => {
//     const filter = query.toUpperCase().replace(/\s+/g, ' ').trim();
//     const city = c.city.toUpperCase();
//     const state = c.state.toUpperCase();
//     if (city.indexOf(filter) > -1 || state.indexOf(filter) > -1) {
//       results.push(c);
//     }
//   });
//   console.log(results);

//   dispatch({
//     type: 'SEARCH',
//     payload: results,
//   });
// };

function setCities(result) {
  dispatch({
    type: 'ADD_CITIES',
    payload: result,
  });
}
export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ cities: state.cities, setCities }}>
      {children}
    </GlobalContext.Provider>
  );
};
