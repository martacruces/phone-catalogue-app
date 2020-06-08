import React from 'react';
import { Link } from 'react-router-dom';
import Phone from './Phone';

const PhonesList = (props) => {
return <ul className="phones__list">{props.allPhones
    .map(phone =>
        <li key={phone.id}>
            <Link to={`/${phone.id}`}>
                <Phone phone={phone}/>
            </Link>
        </li>)}
    </ul>
}

export default PhonesList;