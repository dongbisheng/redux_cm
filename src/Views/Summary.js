import React, { Component } from "react";
import store from '../store'
class Summary extends Component{
    constructor(props){
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            count: Object.values(store.getState()).reduce((v1,v2) => v1 + v2 , 0)
        }
    }
    onUpdate (){
        this.setState({
            count : Object.values(store.getState()).reduce((v1,v2) => v1 + v2 , 0)
        })
    }
    render() {
        return (
          <div>
              <p>total count {this.state.count}</p>
          </div>
        )
    }
    componentDidMount() {
        this.dispose = store.subscribe(this.onUpdate)
    }
    componentWillUnmount() {
        this.dispose();
    }
}

export default Summary
