/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const App = ({}) => (
  <View style={styles.container}>
    <Text>I'm MyComponent</Text>
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
