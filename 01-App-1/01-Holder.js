import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>Titulo Mojado</Text>

        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Hello Edmundo this is a phone app.</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



//     return(
//       <View style={ myStyle.mainCont } >
//         <Text>
//           <Text>My First Phone App</Text>
//           <Text>Providign Information</Text>
//           <Text>By: Edmundo Rubio</Text>
//         </Text>
//       </View>
//     )
//   }
// }

// const myStyle = StyleSheet.create({
//   mainCont: {
//     flex: 1,
//     backgroundColor: 'aquamarine',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// })