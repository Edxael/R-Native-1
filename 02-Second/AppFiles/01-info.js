import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class extends Component{
    
    static defaultProps = {
        info: 'Hello Edxael'
    }
    
    render(){
        console.log("Hello ******** again");
        return(
      
            <View>
                <Text>Hello From 01 File.**.01</Text>
                <Text>{ this.props.data }</Text>
                <Text>{ this.props.info }</Text>

            </View>
            
        )
    }
}