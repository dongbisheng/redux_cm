import React, {Component} from 'react';
import Summary from "./Summary";
import Counter from "./Counter";

class ControlPane extends Component {

    render() {
        const paneStyle = {
            margin: 10
        };
        return (
            <div className='control_pane' style={paneStyle}>
                <Counter caption='First'/>
                <Counter caption='Second'/>
                <Counter caption='Third'/>
                <Summary />
            </div>
        )
    }
}

export default ControlPane
