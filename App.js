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

const App = ({}) => (
  <Provider store={createStore(reducers)}>
    <View style={styles.wrapper}>
      <Header title='Tech Stack' />
      <View style={styles.container}>

      </View>
    </View>
  </Provider>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {

  }
});
