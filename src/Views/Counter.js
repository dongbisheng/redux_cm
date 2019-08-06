import React from 'react';
import PropType from 'prop-types';

class Counter extends React.Component{
    render() {
        const countStyle = {
            counter: {
                margin: 10
            },
            title: {
                marginRight: 10,
                color: '#F2C211'
            },
            button: {

            },
            content: {
                marginLeft: 10,
                marginRight: 10
            }
        }
        return (
            <div className='counter' style={countStyle.counter}>
                <span style={countStyle.title}>{this.props.caption}</span>
                <button onClick={()=>{this.props.handleCount(false)}}>-</button>
                <span style={countStyle.content}>{this.props.value}</span>
                <button onClick={()=>{this.props.handleCount(true)}}>+</button>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropType.string.isRequired,
    initValue: PropType.number,
}

export default Counter;
