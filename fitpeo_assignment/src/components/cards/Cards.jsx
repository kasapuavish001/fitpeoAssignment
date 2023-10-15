import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cards.scss';
const Cards = (item) => {
    const { id, icon, text1, text2, span, arrow, color } = item.item;
    return (
        <div className='card'>
            <div className="iconblock" style={{ backgroundColor: color }}>
                {icon}
            </div>
            <div className="card_deatils">
                <p className="text">{text1}</p>
                <p className="text">{text2}</p>
                <p className="text"><span className={arrow == "up" ? "green" : "red"}>{arrow == "up" ? <FontAwesomeIcon icon={faArrowUp} size='xs' style={{ color: "green" }} /> : <FontAwesomeIcon icon={faArrowDown} size='xs' style={{ color: "red" }} />}{span} </span>this month</p>
            </div>
        </div>
    )
}

export default Cards
