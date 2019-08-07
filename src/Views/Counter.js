import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../Action'

function Counter({caption,onIncrease,onDecrease,value}) {
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
    };
    return (
        <div className='counter' style={countStyle.counter}>
            <span style={countStyle.title}>{caption}</span>
            <button onClick={onDecrease}>-</button>
            <span style={countStyle.content}>{value}</span>
            <button onClick={onIncrease}>+</button>
        </div>
    );
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onIncrease: PropTypes.func.isRequired,
    onDecrease: PropTypes.func.isRequired
};

function mapState(state, ownProp) {
    return {
        value: state[ownProp.caption]
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onIncrease: () => {
            dispatch(Actions.increment(ownProps.caption))
        },
        onDecrease: () => {
            dispatch(Actions.decrement(ownProps.caption))
        }
    }
}

export default connect(mapState,mapDispatchToProps)(Counter);
