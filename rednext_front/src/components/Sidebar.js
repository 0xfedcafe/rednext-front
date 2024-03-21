import '../styles/Sidebar.css';

const Sidebar = ({ burnedArea }) => {
    return (
        <div className="sidebar-sectiob">
            <div className="sidebar-section">
                <span>Current burned area: {burnedArea ? burnedArea : 2000} hectares</span>
            </div>
            <div className="sidebar-section">
                <h2>Legend:</h2>
                <div className="legend">
                    <div className="legend-item">
                        <div className="legend-icon"></div>
                        <span>Fires</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-icon"></div>
                        <span>High risk</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar
