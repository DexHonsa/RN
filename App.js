import React from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {Stack,NewStack} from './config/router';
import store from './store';
import {Provider} from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>

        <Stack  />

      </Provider>
    );
  }

}

export default App;
