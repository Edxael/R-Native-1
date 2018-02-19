import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class extends Component{
    
    
    render(){
        console.log("Hello ************ again");
        return(
      
            <View>
                <Text>Hello From 01 File..01</Text>
                <Text>{ this.props.data }</Text>
            </View>
            
        )
    }
}