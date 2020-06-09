import React from 'react';

const SpinnerVeil = (props) => {
    return props.isVisible ?
        <div className="loading-spinner">
            <div className="loading-spinner__dots-wrapper">
                <div className="loading-spinner__dot"></div>
                <div className="loading-spinner__dot"></div>
                <div className="loading-spinner__dot"></div>
                <div className="loading-spinner__dot"></div>
            </div>
        </div> : null;
}

export default SpinnerVeil;