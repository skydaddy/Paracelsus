import React, { useState } from 'react';
import Context from './context';

export function GlobalState(props) {
  const [state, setState] = useState({});
  const actions = {
    setName: (text) => setState({ ...state, name: text })
  }

  return (
    <Context.Provider value={{ ...state, ...actions }}>{props.children}</Context.Provider>
  );
}
