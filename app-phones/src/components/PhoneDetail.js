import React from 'react';
import { Link } from 'react-router-dom';

const PhoneDetail = props => {
    return <div className="phone-detail">
        <Link to='/'>Back to list</Link>
        <div>
            {props.phone ? (<React.Fragment>
                <div class="phone__info-wrapper">
                    <p>{props.phone.name}</p>
                    <p>{props.phone.manufacturer}</p>
                    <p>{props.phone.description}</p>
                    <p>{props.phone.color}</p>
                    <p>{props.phone.price}</p>
                    <p>{props.phone.screen}</p>
                    <p>{props.phone.processor}</p>
                    <p>{props.phone.ram}</p>
                </div>
            </React.Fragment>) : ''}
        </div>
    </div>
}

export default PhoneDetail;