import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
 const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
 type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Homepage</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

/** 
    //Index.Android.js - place code in here for Android!!!

    // Import a library to help create a component
    import React from 'react';
    import { 
            Text,
            AppRegistry,
          } from 'react-native';

    // Create a Component
    const App = () => (
      <Text> Some Text</Text>
    );

    // const App = () => {
    //   return (
    //   <Text> Some Text</Text>
    //   );
    // };

    // Render it to the device
    AppRegistry.registerComponent('REACT_NATIVE_APPS', () => App);
*/
