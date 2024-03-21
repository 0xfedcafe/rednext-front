// Sidebar.js
import React from 'react';
import Legend from './Legend';
import { fireIcon, damagedAreaIcon, windIcon, highRiskZoneIcon } from './IconImports';
import '../styles/Sidebar.css'; // Import your sidebar styles

const Sidebar = ({ burnedArea }) => {
    const legendItems = [
        { icon: fireIcon, description: 'Active fire' },
        { icon: damagedAreaIcon, description: 'Damaged area' },
        { icon: windIcon, description: 'Wind' },
        { icon: highRiskZoneIcon, description: 'Zone with high risk of fire' }
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <span className="sidebar-text">Current burned area: {burnedArea ? burnedArea : 2000} hectares</span>
            </div>
            <div className="sidebar-section">
                <div className="sidebar-legend">
                    <span>Legend:</span>
                    <Legend items={legendItems} />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
