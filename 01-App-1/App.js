import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'

export default class App extends Component{
  render(){
    console.log("Hello------------------------------------------------");

      return (
        <View style={styles.container}>
  
          <Text>Titulo Mojado</Text>
  
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload...</Text>
          <Text>Shake your phone to open the developer menu...</Text>

          <Text>ppppppppppppppppppppppppppppppppp</Text>
          <Text>Hello Edmundo this is your 1st phone app...</Text>
          
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'aquamarine',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
    
