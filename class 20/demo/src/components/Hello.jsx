import React, { Component } from 'react'

export default class Hello extends Component {
    constructor(props){
        super(props);
        this.state = {color:'red',height:"500"}
    }

    componentDidMount(){

    }

  render() {
    return (
      <div>Hello</div>
    )
  }

  componentWillUnmount(){
    
  }
}
