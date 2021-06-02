import React, { createContext, useContext, useReducer } from 'react';

//Preparing The Data Layer
export const StateContext = createContext();

//Wrapping our app and provides the data
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull data from data layer
export const useStateValue = () => useContext(StateContext);