import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class extends Component{

    constructor(){
        super()
        this.state = {
            show: false
        }
    }
    
    static defaultProps = {
        info: 'Hello Edxael'
    }

    exe1(){
        console.log("Executing Function")
        console.log("Show: ", this.state.show);
        let store = (this.state.show) ? false : true
        console.log("Store: ", store);
        
        this.setState({ show: store })
        setTimeout(() => { console.log("Show: ", this.state.show) }, 500)
    }

    componentWillMount(){
        this.exe1()
    }
    
    render(){
        console.log("Hello ******** again");
        return(
      
            <View>

                <Text>Hello From 01 File.** 03 **</Text>
                <Text>{ this.props.data }</Text>
                <Text>{ this.props.info }</Text>

                <Text> { (this.state.show) ? "We Are Open" : "We Are Closed" } </Text>
              

            </View>
            
        )
    }
}