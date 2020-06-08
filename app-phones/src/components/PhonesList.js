import React from 'react';
import { Link } from 'react-router-dom';

const PhonesList = (props) => {
return <ul className="phones__list">{props.allPhones
    .map(phone =>
        <li key={phone.id}>
            <Link to={`/${phone.id}`}>{phone.name}</Link>
        </li>)}
    </ul>
}

export default PhonesList;