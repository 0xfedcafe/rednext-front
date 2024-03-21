import './App.css';
import Map from './components/Map';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

// Get this data from the server

function App() {
    var [points, setPoint]= useState([])
    points = [{x:51.505, y:0}, {x:51.505, y:0.01}, {x:51.503, y:0.01}]
    return (
        <div className="main">
            <Topbar className="topbar"/>
            <Sidebar className="sidebar"/>
            {/* Pass the points we got from the server and render them on a map */}
            <Map points={points} />
        </div>
    );
}

export default App;
