import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

 const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'for android version below 5 :\n' +
    'https://stackoverflow.com/questions/31525431/getting-error-closed-twice-on-adb-reverse/41640115#41640115 \n' +

    'You can also connect to the development server over Wi-Fi. You will first need to install the app on your device' +
    'using a USB cable, but once that has been done you can debug wirelessly by following these instructions. You will' +
    'need your development machines current IP address before proceeding.' +
    'You can find the IP address in System Preferences → Network' +

    'Make sure your laptop and your phone are on the same Wi-Fi network.' +
    'Open your React Native app on your device. You will see a red screen with an error.' +
    'This is OK. The following steps will fix that. Open the in-app Developer menu. Go to Dev Settings → Debug server' + 
    'host for device. Type in your machines IP address and the port of the local dev server (e.g. 10.0.1.1:8081).' +
    'Go back to the Developer menu and select Reload JS.'

    
});
 type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Album'} />
        <AlbumList />
        {/* <Text style={styles.welcome}>Homepage</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}
      </View>
    );
  }
}
 const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'white',
    // marginTop: 0 
  },
  welcome: {
    // fontSize: 20,
    // textAlign: 'center',
    // margin: 10,
    // color: 'pink'
  },
  instructions: {
    // textAlign: 'center',
    // color: 'green',
    // marginBottom: 5,
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
