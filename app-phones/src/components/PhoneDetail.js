import React from 'react';
import { Link } from 'react-router-dom';
import { HOST } from '../api/Api';

const PhoneDetail = props => {
    return <div className="phone-detail">
        <Link to='/'><p className="back-button"><i className="fas fa-arrow-left back-button__icon"></i>Back to list</p></Link>
        <div className="phone phone--no-hover">
            {props.phone ? (<React.Fragment>
                <img className="phone__image phone__image--full-width" src={HOST+'/'+props.phone.imageFileName} alt={props.phone.name}></img>
                <div className="phone__info-wrapper">
                    <p className="phone__name phone__name--big">{props.phone.name}</p>
                    <p className="phone__info-line"><span className="phone__info-key">Manufacturer: </span>{props.phone.manufacturer}</p>
                    <p className="phone__info-line"><span className="phone__info-key">Description: </span>{props.phone.description}</p>
                    <p className="phone__info-line"><span className="phone__info-key">Color: </span>{props.phone.color}</p>
                    <p className="phone__info-line"><span className="phone__info-key">Price: </span>{props.phone.price}€</p>
                    <p className="phone__info-line"><span className="phone__info-key">Screen: </span>{props.phone.screen}</p>
                    <p className="phone__info-line"><span className="phone__info-key">Processor: </span>{props.phone.processor}</p>
                    <p className="phone__info-line"><span className="phone__info-key">RAM: </span>{props.phone.ram}</p>
                </div>
            </React.Fragment>) : ''}
        </div>
    </div>
}

export default PhoneDetail;