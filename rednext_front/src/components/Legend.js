// Legend.js
import React from 'react';
import '../styles/Legend.css';

const Legend = ({ items }) => {
    return (
        <div className="legend">
            {items.map((item, index) => (
                <div className="legend-item" key={index}>
                    {item.icon && <img src={item.icon} alt="icon" className="legend-icon" />}
                    {item.color && <div className="legend-icon" style={{ backgroundColor: item.color }}></div>}
                    <span>{item.description}</span>
                </div>
            ))}
        </div>
    );
}

export default Legend;
