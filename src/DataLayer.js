import React, { createContext, useContext, useReducer} from "react";

export const DataLayerContext = createContext();

// Children is what is wrapped inside
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext);