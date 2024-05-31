import React, { useState, createContext, useContext } from "react";
import data from '../database/tickets.json';

// Creación del contexto
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
   const [dades, setDades] = useState(null);

    return (
        <GlobalContext.Provider value={{ dades }}>
            {children}
        </GlobalContext.Provider>
    );    
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
