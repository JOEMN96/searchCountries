import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

let initial = {
  value: "",
  data: [],
};

let store = createContext(initial);

let { Provider } = store;

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initial);

  return <Provider value={{ dispatch, state }}>{children}</Provider>;
};

export { store, GlobalState };
