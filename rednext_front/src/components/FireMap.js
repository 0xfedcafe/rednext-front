import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

function FireMap() {
    const [fireImageData, setFireImageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/fire_map');
                console.log(response)
                setFireImageData(response.data.image); // Assuming the backend sends GeoJSON in 'geojson' property
            } catch (error) {
                console.error('Error fetching Image data:', error);
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
            {/* {imageData && <ImageOverlay url={imageData} bounds={[[lat1, lon1], [lat2, lon2]]} />} */}
        </MapContainer>
    );
}

export default FireMap;