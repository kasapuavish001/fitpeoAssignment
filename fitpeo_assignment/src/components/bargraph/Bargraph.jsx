import React from 'react'
import Baritem from '../baritem/Baritem'
import './Bargraph.scss'

const data = [
    {
        id: 1,
        name: "Jan",
        height: "40%"
    },
    {
        id: 2,
        name: "Feb",
        height: "60%"
    },
    {
        id: 3,
        name: "Mar",
        height: "50%"
    },
    {
        id: 4,
        name: "Apr",
        height: "40%"
    },
    {
        id: 5,
        name: "May",
        height: "70%"
    },

    {
        id: 6,
        name: "Jun",
        height: "90%"
    },

    {
        id: 7,
        name: "Jul",
        height: "40%"
    },

    {
        id: 8,
        name: "Aug",
        height: "70%"
    },

    {
        id: 9,
        name: "Sep",
        height: "20%"
    },

    {
        id: 10,
        name: "Oct",
        height: "60%"
    },

    {
        id: 11,
        name: "Nov",
        height: "70%"
    },

    {
        id: 12,
        name: "Dec",
        height: "70%"
    },


]
const Bargraph = () => {
    return (
        <div className="bar-graph">
            <div className="bars-list">
                {data.map((item) => {
                    return <Baritem key={item.id} item={item} />
                })}
            </div>
            <div className="bars-line" />
        </div>
    )
}

export default Bargraph
