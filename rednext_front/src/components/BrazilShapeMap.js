import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { Icon } from 'leaflet';
import fire from "./fire_icon.png"
import windUrl from "./wind_icon.png"
import CircleMarkerWithRadius from './CircleMarkerWithRadius';

const fireIcon = new Icon({
    iconUrl: fire,
    iconRetinaUrl: fire,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
});

const windIcon = new Icon({
    iconUrl: windUrl,
    iconRetinaUrl: windUrl,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
});

const BrazilShapeMap = ({ points, winds }) => {
const BrazilShapeMap = ({ fire_points, affected_areas }) => {
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
        <MapContainer center={[-10, -55]} zoom={4} scrollWheelZoom={false} minZoom={3}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {geojsonData && <GeoJSON data={geojsonData} />}
            <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            />
            {/* Render custom markers with fire icon */}
            {fire_points.map((point, index) => (
                <Marker key={index} position={[point.x, point.y]} icon={fireIcon}>
                    <Popup>
                        Some kind of PopUp. {point.x} {point.y}
                    </Popup>
                </Marker>
            ))}
            {winds.map((wind, index) => (
                <Marker key={index} position={[wind.y, wind.x]} icon={windIcon}>
                    <Popup>
					3m/s {wind.x} {wind.y}
                    </Popup>
                </Marker>
            ))}
            {affected_areas.map((point) => (
		    <CircleMarkerWithRadius center={[point.x, point.y]} radius={40} />
            ))}
        </MapContainer>
    );
}

export default BrazilShapeMap;
