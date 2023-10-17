import { faAngleDown, faAngleRight, faBars, faBox, faCircleQuestion, faGear, faKey, faMoneyCheck, faPercent, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import img from '../../images/profilepic.jpg';
import './Sidebar.scss';

const option = [
    {
        id: 1,
        name: "Dashboard",
        icon: <FontAwesomeIcon icon={faKey} className='icons' />,
    },
    {
        id: 2,
        name: "Product",
        icon: <FontAwesomeIcon icon={faBox} className='icons' />,
    },
    {
        id: 3,
        name: "Customers",
        icon: <FontAwesomeIcon icon={faUser} className='icons' />,
    },
    {
        id: 4,
        name: "Income",
        icon: <FontAwesomeIcon icon={faMoneyCheck} className='icons' />,
    },
    {
        id: 5,
        name: "Promote",
        icon: <FontAwesomeIcon icon={faPercent} className='icons' />,
    },
    {
        id: 6,
        name: "Help",
        icon: <FontAwesomeIcon icon={faCircleQuestion} className='icons' />,
    },

]
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

                        {option.map((item) => {
                            return (
                                <li key={item.id}><a href="#"><span>{item.icon}{item.name}</span><FontAwesomeIcon className='arrow' icon={faAngleRight} /></a></li>
                            )
                        })}
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
