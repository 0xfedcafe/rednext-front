import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = ({ points }) => {
    return ( 
	<MapContainer center={[-15.793889, -47.882778]} zoom={4} scrollWheelZoom={true}>
	<TileLayer
	url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	/>
	{/* <TileLayer 
	url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
	subdomains={['mt1','mt2','mt3']}
	/> */}
	{points.map((point) => (
	    <Marker position={[point.x, point.y]}>
		<Popup>
		Some kind of PopUp. {point.x} {point.y}
		</Popup>
	    </Marker>
	))}
	</MapContainer>
    );
}

export default Map
