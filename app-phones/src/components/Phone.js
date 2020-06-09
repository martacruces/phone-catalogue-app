import React from 'react';
import { HOST } from '../api/Api';

const Phone = (props) => {
    return <div className="phone">
        <div className="phone__image-wrapper">
            <img className="phone__image" src={HOST+'/'+props.phone.imageFileName} alt={props.phone.name}></img>
        </div>
        <div className="phone__info-wrapper">
            <h4 className="phone__name">{props.phone.name}</h4>
            <p className="phone___info-line phone__info-line--no-margin">{props.phone.price}€</p>
        </div>
    </div>
}

export default Phone;