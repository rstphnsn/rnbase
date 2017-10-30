import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';
const store = configureStore();

import Routes from './Routes/Routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default App;
