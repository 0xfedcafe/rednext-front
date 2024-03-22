import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import fire from "./fire_icon.png"
import CircleMarkerWithRadius from './CircleMarkerWithRadius';

const fireIcon = new Icon({
    iconUrl: fire,
    iconRetinaUrl: fire,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
});

const Map = ({ affected_areas, fire_points }) => {
    const fireIconUrl = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD4UlEQVR4nO1YWWxMURj+KqWmaq2qrQwvZM65tQxRS2yh4oG0qCUeLI+eeLMkhIgHggiC8MCLRyKxBInlgXrwKCTmnDZqqSKolC6iv/yztffOvTO33JlOk/mSL5ncnHvP953z///55wA55JBDDt1BQD8t0aAljr6cimL0RSiBn1qClMBXJbDz4SLko6/g9XSUsHgTBZ7qACagL0AFsCnBQMTE9zoDNch2KIF7tgY4pCQ6tcQeZCtCAvOcxJuMCBwnIA/ZhPqJGKgkXroxEOXlrEpuJXCiB+JjIXUJ2QBtYJmS+NNTAzrC3b0qvn4a/Fri8z+Kp2hib+4V8a+mYLCWePGv4nWXiVZlIJjxlkFJ3Phf8bqrMr16H0Rhxgxwr5NKVH15P/q+rJi04drE8YyIVwFscSPo3ewCog2T6ceKEncmBH5rA0ZaxdcHMF1LtLkx0Lx8ZNhA2ERlibtwEriVNvGN5Rjk9rB6MyOfOtdPihtgfl063JWJkIGZaTGgJC66EVBn5FHrqrEm8TE2LShyY+KK5+JDAkvcVpTmyq7QsZJ35W1wQKpkbuHd9tSAFnjuRvy3pSMcxcfYXjWe6srzUuXCWs/EhwQWuxHPMZ5KfDwflqTMh5OeGdAC51OJ/7J4qGvxsVB6MyM/2TefeGaAT8lk4j8vHNIj8TE2V45MZqDBSwMtThN9mONLKJdxbvMTnSkm2mhv4E+NP1yxHBL5l2cGtES7U7nsqC5zXuUjo4geF0RMOIxpmu9YVtu8MyDwyTZ0FiUJnR1lRPd9EQPMY/altWVlqdMOfPTMgJJ4ZjdJ2+px9uK3TyS6XdglnvmogGhX4vjfayakP4m1wDm7STprbGJ/i5/oepFZfIz8fJP5nc6aSfY7IHHGSwNr7SbhJDSJZ3FXB9uLj3HfGHMir/PbGghJVHlmoKECPr6Ysk6SkMCHo0mbjFfM50VHdZld/H/jWw54CS1w0DoR9/kmA06h0503C03v/LBps5XEfniNFwEUcWXoPlFjhVkMPRiY2gCP6fbOhwqftQf6xP+1kQ5oie3W1TK1zW524FpRfHzbqnGJq29ga1rEO1Ukbo3jyXy4NLWBQ6Xx5H1raauVwGmkG8+D6K8k7praiQpfxAS3DBeHOYu/MDw8hsUnhI7EHf42MgG+09QCp0w7MWsAta6OhtO+0URXhxDd8xHd9UV+742UTw65hmB/a9xfyJj4hJywtBmNcwvDlaWjqix8SDH5Nz+zrroS+Mg3HOhNhG/nuMTanBNO5DqvJA5wZUOWXa9XK4mzSqBWCzRFu9j28EoL1HJ7wCes54dUDjnkgD6Lvx298WvZ7Gr5AAAAAElFTkSuQmCC">'; // HTML link to your fire icon image
    return (
        <MapContainer center={[-15.793889, -47.882778]} zoom={4} scrollWheelZoom={true} minZoom={3}>
            {/* Use a grey tile layer */}
            <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            />
            {/* Render custom markers with fire icon */}
            {fire_points.map((point, index) => (
                <Marker key={index} position={[point.x, point.y]} icon={fireIcon}>
                </Marker>
            ))}
            {affected_areas.map((point) => (
		    <CircleMarkerWithRadius center={[point.x, point.y]} radius={50000} />
            ))}
        </MapContainer>
    );
}

export default Map;

