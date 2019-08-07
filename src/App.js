import React from 'react';
import ControlPane from './Views/ControlPane'
import store from "./store";
import { Provider } from 'react-redux';

function App() {
  return (
      <Provider store={store}>
        <ControlPane />
      </Provider>
  );
}

export default App;
