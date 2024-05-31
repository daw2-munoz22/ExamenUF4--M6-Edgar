import { useState, useEffect, useContext, createContext } from "react";

import data from './database/tickets.json';

// Creación del contexto
const GlobalContext = createContext();



export const GlobalProvider = ({ children }) => {
   const {dades, setDades} = useState(data);

    return (
        <GlobalContext.Provider value={{dades}}>
            {children}
        </GlobalContext.Provider>
    );    
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}