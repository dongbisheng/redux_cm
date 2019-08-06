import React, {Component} from 'react';
import Counter from "./Counter";
import Summary from "./Summary";

class ControlPane extends Component {

    render() {
        const paneStyle = {
            margin: 10
        }
        return (
            <div className='controlpane' style={paneStyle}>
                <Counter caption='First'/>
                <Counter caption='Second'/>
                <Counter caption='Third'/>
                <Summary/>
            </div>
        )
    }
}

ControlPane.defaultProps = {}

export default ControlPane
