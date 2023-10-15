import { faBagShopping, faChevronDown, faFile, faHandsClapping, faMagnifyingGlass, faSackDollar, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Cards from '../cards/Cards';
import './Main.scss';

import { CChart } from '@coreui/react-chartjs';
const data = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faSackDollar} className='icon' size='3x' style={{ color: "green" }} />,
        text1: "Earning",
        text2: "$198k",
        span: "37.7%",
        text3: "this month",
        arrow: "up",
        color: "rgba(0, 128, 0, 0.184)"
    },
    {
        id: 2,

        icon: <FontAwesomeIcon icon={faFile} className='icon' size='3x' style={{ color: "purple" }} />,
        text1: "Orders",
        text2: "$2.4k",
        span: "2%",
        arrow: "down",
        color: "rgba(128, 0, 128, 0.184)"
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faWallet} className='icon' size='3x' style={{ color: "blue" }} />,
        text1: "Balance",
        text2: "$2.4k",
        span: "2%",
        arrow: "down",
        color: "rgba(0, 0, 255, 0.184)"
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faBagShopping} className='icon' size='3x' style={{ color: "tomato" }} />,
        text1: "Total Sales",
        text2: "$89k",
        span: "11%",
        arrow: "up",
        color: "rgba(255, 99, 71, 0.184)"
    },

]
const Main = () => {
    return (
        <div className='main'>
            <div className="searchbar">
                <p className="name">Hello Avish <FontAwesomeIcon icon={faHandsClapping} className='icon' /> ,</p>
                <div className="inputblock">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='searchicon' />
                    <input type="text" placeholder='Search' />
                </div>
            </div>

            <div className="cardblock">
                {data.map((item) => {
                    return <Cards item={item} key={item.id} />
                })}
            </div>
            <div className="graph">
                <div className="bargraph">
                    <div className="block">
                        <div className="textblock">
                            <p className="text">
                                Overview
                            </p>
                            <p className="text">Monthly Earning</p>
                        </div>
                        <p className="sidetext">Quality<FontAwesomeIcon icon={faChevronDown} /></p>
                    </div>
                    <CChart
                        type="bar"
                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: [
                                {
                                    data: [40, 80, 60, 39, 60, 40, 39, 80, 40, 50, 60, 60],
                                    backgroundColor: "#f2efff",
                                    hoverBackgroundColor: "#5a32ea",
                                    borderRadius: '5',
                                    borderSkipped: "true",
                                },

                            ],
                        }}
                        labels="months"
                        options={{
                            plugins: {
                                legend: {
                                    display: false
                                }
                            },
                            scales: {
                                x: {
                                    grid: {
                                        color: "transparent",
                                        drawBorder: false,
                                    },
                                    ticks: {
                                        color: "#000",
                                    },
                                },
                                y: {
                                    grid: {
                                        color: "transparent",
                                        drawBorder: false
                                    },
                                    ticks: {
                                        color: "transparent",
                                    },
                                },
                            },
                        }}
                    />
                </div>
                <div className="chartgraph">
                    <div className="textblock">
                        <p className="text">
                            Customers
                        </p>
                        <p className="text">Customer that buy products</p>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <CChart
                            type="doughnut"
                            data={{
                                datasets: [
                                    {
                                        backgroundColor: ['#b9b6c8', '#d41578', '#653de9'],
                                        data: [60, 20, 80],
                                        borderWidth: [10, 3, 1],
                                    },
                                ],
                            }}
                            options={{
                                cutout: 90,
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center',
                        }}>
                            <p className='graphtext'>65%</p>
                            <p className='graphtext'>Total New</p>
                            <p className='graphtext'>Customers</p>
                        </div>
                    </div>
                </div>



            </div>
            <div className="datatable">
                <div className="searchbar">
                    <p className="name">Product Shell</p>
                    <div className="block">
                        <div className="inputblock">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='searchicon' />
                            <input type="text" placeholder='Search' />
                        </div>
                        <p>last 30 days<FontAwesomeIcon icon={faChevronDown} className='arrow' /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
