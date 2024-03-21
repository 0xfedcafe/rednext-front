import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ points }) => {
    return (
        <MapContainer center={[-15.793889, -47.882778]} zoom={4} scrollWheelZoom={true}>
            <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            />
            {/* Render markers */}
            {points.map((point, index) => (
                <Marker key={index} position={[point.x, point.y]}>
                    <Popup>
                        Some kind of PopUp. {point.x} {point.y}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Map;
