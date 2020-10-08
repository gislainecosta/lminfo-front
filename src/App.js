import React, { useReducer, useEffect } from "react";
import './App.css';

import Context from './functions/Context';
import { Reducer, initialState, } from "./functions/Reducer";

import Router from './components/Router/Router'

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  useEffect(() => {

  }, [])

  return (
    <Context.Provider value={{
      offices: state.offices,
      employees: state.employees,
      dispatch: dispatch
    }}>
      <div id='app'>
        <Router />
      </div>
    </Context.Provider >
  );
}

export default App;
