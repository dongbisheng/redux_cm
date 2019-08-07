import React  from "react";
import { connect } from 'react-redux';

const Summary = ({value}) => {
    return (
        <div className='summary'>
            <p>total: {value}</p>
        </div>
    )
}

function mapState(state, ownProp) {
    return {
        value: Object.values(state).reduce((v1,v2) => v1 + v2, 0)
    }
}

export default connect(mapState)(Summary);
