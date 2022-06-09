import React, {Children, createContext, useContext, useReducer} from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({initialState, reducer, children}) => (
    //passa o estado inicial e o reducer que vai receber o
    //dispatch que vai mudar o estado inicial
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);