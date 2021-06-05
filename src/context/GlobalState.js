import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state

const initialState = {
  transactions: [],
};

// create context: este hook lo que hace es crear un estado global al que cualquier componente pueda acceder
export const GlobalContext = createContext(initialState);

// provider component: para que los componentes puedan acceder al estado global, los tengo que encerrar dentro de un componente provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
