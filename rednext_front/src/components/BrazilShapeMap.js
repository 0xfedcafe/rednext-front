import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

function BrazilShapeMap() {
    const [geojsonData, setGeojsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/brazil_shape');
                console.log(response)
                setGeojsonData(response.data.geojson); // Assuming the backend sends GeoJSON in 'geojson' property
            } catch (error) {
                console.error('Error fetching GeoJSON data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <MapContainer center={[-10, -55]} zoom={4} style={{ height: '400px' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {geojsonData && <GeoJSON data={geojsonData} />}
        </MapContainer>
    );
}

export default BrazilShapeMap;