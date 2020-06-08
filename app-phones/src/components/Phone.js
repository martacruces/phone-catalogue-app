import React from 'react';
import { HOST } from '../api/Api';

const Phone = (props) => {
    return <div>
        <img src={HOST+'/'+props.phone.imageFileName} alt={props.phone.name}></img>
        <p>{props.phone.name}</p>
    </div>
}

export default Phone;