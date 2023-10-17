import { faAngleDown, faAngleRight, faBars, faBox, faCircleQuestion, faGear, faKey, faMoneyCheck, faPercent, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import img from '../../images/profilepic.jpg';
import './Sidebar.scss';
const Sidebar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className="mobilemenu" onClick={() => { setMenu(!menu) }}>
                <FontAwesomeIcon icon={faBars} />
                <p className="heading"><FontAwesomeIcon icon={faGear} className='icon' />Dashboard</p>
            </div>
            <div className={`sidebar ${menu ? 'mobileview' : ""}`} >
                <><div className="sidebar_menu" >
                    <p className="heading"><FontAwesomeIcon icon={faGear} className='icon' />Dashboard</p>
                    <ul>
                        {menu && <li onClick={() => { setMenu(!menu) }}><a href="#"><span><FontAwesomeIcon icon={faXmark} className='icons' />Close</span></a></li>}
                        <li><a href="#"><span><FontAwesomeIcon icon={faKey} className='icons' />Dashboard</span></a></li>
                        <li><a href="#"><span><FontAwesomeIcon icon={faBox} className='icons' />Product</span><FontAwesomeIcon className='arrow' icon={faAngleRight} /></a></li>
                        <li><a href="#"><span><FontAwesomeIcon icon={faUser} className='icons' />Customers</span><FontAwesomeIcon className='arrow' icon={faAngleRight} /></a></li>
                        <li><a href="#"><span><FontAwesomeIcon icon={faMoneyCheck} className='icons' />Income</span><FontAwesomeIcon className='arrow' icon={faAngleRight} /></a></li>
                        <li><a href="#"><span><FontAwesomeIcon icon={faPercent} className='icons' />Promote</span><FontAwesomeIcon className='arrow' icon={faAngleRight} /></a></li>
                        <li><a href="#"><span><FontAwesomeIcon icon={faCircleQuestion} className='icons' />Help</span><FontAwesomeIcon className='arrow' icon={faAngleRight} /></a></li>
                    </ul>
                </div><div className="profile">
                        <div className="profile_details">
                            <img src={img} alt="profile" className='profile_img' />
                            <div className="text">
                                <p className="name">Avish</p>
                                <p className="role">Project Manager</p>
                            </div>
                        </div>
                        <FontAwesomeIcon className='arrow' icon={faAngleDown} />
                    </div></>
            </div >
        </>
    )
}

export default Sidebar
