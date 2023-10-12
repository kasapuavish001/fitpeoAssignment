import { faAngleDown, faAngleRight, faBox, faCircleQuestion, faGear, faKey, faMoneyCheck, faPercent, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img from '../../images/profilepic.jpg';
import './Sidebar.scss';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar_menu">
                <p className="heading"><FontAwesomeIcon icon={faGear} className='icon' />Dashboard</p>
                <ul>
                    <li><a href="#"><span><FontAwesomeIcon icon={faKey} className='icons' />Dashboard</span></a></li>
                    <li><a href="#"><span><FontAwesomeIcon icon={faBox} className='icons' />Product</span><FontAwesomeIcon className='arrow' icon={faAngleRight} /></a></li>
                    <li><a href="#"><span><FontAwesomeIcon icon={faUser} className='icons' />Customers</span><FontAwesomeIcon className='arrow' icon={faAngleRight} /></a></li>
                    <li><a href="#"><span><FontAwesomeIcon icon={faMoneyCheck} className='icons' />Income</span><FontAwesomeIcon className='arrow' icon={faAngleRight} /></a></li>
                    <li><a href="#"><span><FontAwesomeIcon icon={faPercent} className='icons' />Promote</span><FontAwesomeIcon className='arrow' icon={faAngleRight} /></a></li>
                    <li><a href="#"><span><FontAwesomeIcon icon={faCircleQuestion} className='icons' />Help</span><FontAwesomeIcon className='arrow' icon={faAngleRight} /></a></li>
                </ul>
            </div>
            <div className="profile">


                <div className="profile_details">
                    <img src={img} alt="profile" className='profile_img' />
                    <div className="text">
                        <p className="name">Avish</p>
                        <p className="role">Project Manager</p>
                    </div>
                </div>
                <FontAwesomeIcon className='arrow' icon={faAngleDown} />

            </div>
        </div>
    )
}

export default Sidebar
