import React from 'react';
import './Baritem.scss';
const Baritem = (item) => {
    const { id, name, height } = item.item;
    return (
        <>
            <div className="bar-item" style={{ height: height }}>
                <p className="month">{name}</p>
            </div>

        </>
    )
}

export default Baritem
