
import React from 'react';
import Legend from './Legend';
import '../styles/Sidebar.css';

const Sidebar = ({ burnedArea }) => {
    const legendItems = [
        { color: 'red', description: 'Fire' },
        { color: 'yellow', description: 'High Risk' },
		{ color: 'blue', description: 'Wind' },
		{ color: 'grey', description: 'Zone with high risk of fire'}
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <span>Current burned area: {burnedArea ? burnedArea : 2000} hectares</span>
            </div>
			<div className="sidebar-legend">
                <span>Legend:</span>
			</div>
            <div className="sidebar-legend">
                <Legend items={legendItems} />
            </div>
        </div>
    );
}

export default Sidebar;
