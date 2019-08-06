import React, { Component } from "react";
import Counter from "./Counter";
import Store from '../store'
class CounterContainer extends Component{
    constructor(props){
        super(props)
        this.state = this.getOwnState()
    }
    getOwnState = () => ({
      value: Store.getState()[this.props.caption]
    })
    render() {
        return (
            <Counter
            caption={this.props.caption}

            />
        );
    }
}
