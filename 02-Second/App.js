import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import FilesComp from './AppFiles/01-info'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FilesComp/>
        <Text>Open up App.js to start working on your app!..</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(118, 255, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
