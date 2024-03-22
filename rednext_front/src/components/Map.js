
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import fire from "./fire_icon.png"

const fireIcon = new Icon({
    iconUrl: fire,
    iconRetinaUrl: fire,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
});

const Map = ({ points, winds }) => {
    return (
        <MapContainer center={[-15.793889, -47.882778]} zoom={4} scrollWheelZoom={true} minZoom={3}>
            {/* Use a grey tile layer */}
            <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            />
            {/* Render custom markers with fire icon */}
            {points.map((point, index) => (
                <Marker key={index} position={[point.x, point.y]} icon={fireIcon}>
                    <Popup>
					Roraima: Moderate saverity, Area Affected: Approximately 500 hectares {point.x} {point.y}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Map;

