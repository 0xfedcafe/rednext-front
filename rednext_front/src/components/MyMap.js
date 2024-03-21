import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

const App = () => {
    const [geojsonData, setGeojsonData] = useState(null);

    useEffect(() => {
        const fetchMapData = async () => {
            const response = await fetch('http://localhost:5000/fire_map');  // Replace with your server URL
            const data = await response.json();
            setGeojsonData(data);
        };

        fetchMapData();
    }, []);

    if (!geojsonData) {
        return <div>Loading map data...</div>;
    }

    return (
        <MapContainer center={[-55.0, -15.0]} zoom={4} style={{ height: '400px' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {geojsonData && <GeoJSON data={geojsonData} style={{ color: 'red' }} />}
        </MapContainer>
    );
};

export default App;
