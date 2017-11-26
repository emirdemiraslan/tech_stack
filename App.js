/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header, Card } from './src/components/common';
import LibraryList from './src/components/LibraryList';

const App = () => (
  <Provider store={createStore(reducers)}>
    <View style={{flex:1}}>
      <Header title='Tech Stack' />
      <LibraryList />

    </View>
  </Provider>
);

export default App;
