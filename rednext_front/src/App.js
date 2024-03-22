import './App.css';
import Map from './components/Map';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import BrazilShapeMap from './components/BrazilShapeMap';
import FireMap from './components/FireMap';
import CircularButton from './components/CircularButton';

// Get this data from the server


function App() {
    var fire_points = [
        { x: -22.9068, y: -43.1729 }, // Rio de Janeiro
        { x: -15.7942, y: -47.8825 }, // Brasília
        { x: -3.7184, y: -38.5434 },  // Fortaleza
        { x: -23.5505, y: -46.6333 }, // São Paulo
        { x: -5.0737, y: -42.8030 },  // Teresina
        { x: -16.6869, y: -49.2648 }, // Goiânia
        { x: -25.4284, y: -49.2733 }, // Curitiba
        { x: -8.0476, y: -34.8770 },  // Recife
        { x: -30.0346, y: -51.2177 }, // Porto Alegre
        { x: -12.9714, y: -38.5014 },  // Salvador
        { x: 51.505, y: 0 }, { x: 51.505, y: 0.01 }, { x: 51.503, y: 0.01 },
        { x: -7.2307, y: -35.8816 },  // João Pessoa
        { x: -22.9028, y: -43.2075 }, // Niterói
        { x: -8.0474, y: -34.8770 },  // Olinda
        { x: -21.1783, y: -47.8096 }, // Ribeirão Preto
        { x: -22.9068, y: -43.1729 }, // Rio de Janeiro (Duplicate for variety)
        { x: -12.9644, y: -38.4959 }, // Lauro de Freitas
        { x: -27.0982, y: -52.6160 }, // Chapecó
        { x: -25.4296, y: -49.2713 }, // Curitiba (Duplicate for variety)
        { x: -22.9035, y: -43.2096 }, // São Gonçalo
        { x: -8.0638, y: -34.8805 }   // Jaboatão dos Guararapes
    ];

    const affected_areas = [{x: -8.0723, y: -39.1264}, {x: -27.8179, y: -50.3264}, {x: -22.2271, y: -45.9394}]


    return (
        <div className="main">
            <Topbar className="topbar" />
            {/* Pass the points we got from the server and render them on a map */}
            <BrazilShapeMap fire_points={fire_points} affected_areas={affected_areas} />
            <CircularButton/>
            {/* <FireMap /> */}
        </div>
    );
}

export default App;
