
import { createContext, useContext, useReducer } from "react";

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppProvider = ({ children }) => {
  // Define the state variables here
  const initialState = {
    isLoggedIn: false,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLoggedIn: true
        }
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
