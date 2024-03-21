import './App.css';
import Map from './components/Map';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import BrazilShapeMap from './components/BrazilShapeMap';
import FireMap from './components/FireMap';

// Get this data from the server

function App() {
<<<<<<< Updated upstream
    var [points, setPoint]= useState([])
    points = [{x:51.505, y:0}, {x:51.505, y:0.01}, {x:51.503, y:0.01}]
    const legend_elements = ["a", "b", "c"]
    return (
        <div className="main">
            <Topbar className="topbar"/>
            <Sidebar className="sidebar" legend_elements={legend_elements}/>
=======
    var [points, setPoint] = useState([])
    points = [{ x: 51.505, y: 0 }, { x: 51.505, y: 0.01 }, { x: 51.503, y: 0.01 }]
    return (
        <div className="main">
            <Topbar className="topbar" />
            <Sidebar className="sidebar" />
>>>>>>> Stashed changes
            {/* Pass the points we got from the server and render them on a map */}
            <BrazilShapeMap />
            <FireMap />
        </div>
    );
}

export default App;
