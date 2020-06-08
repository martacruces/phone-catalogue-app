import React from 'react';
import { Link } from 'react-router-dom';
import { HOST } from '../api/Api';

const PhoneDetail = props => {
    return <div className="phone-detail">
        <Link to='/'>Back to list</Link>
        <div>
            {props.phone ? (<React.Fragment>
                <div className="phone__info-wrapper">
                    <img src={HOST+'/'+props.phone.imageFileName} alt={props.phone.name}></img>
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