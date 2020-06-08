import React from 'react';

const SpinnerVeil = (props) => {
    return props.isVisible ?
        <div>
            <p>Loading...</p>
        </div> : null;
}

export default SpinnerVeil;