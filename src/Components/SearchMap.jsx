
import { useContext } from "react";
import CitiesContext from "../Context/CitiesContext";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function SearchMap() {
    const {cities} = useContext(CitiesContext);
    
    return (
        <>
            <div id="map">
            {
            cities.length > 0 &&
            <MapContainer center={[cities[0].latitude, cities[0].longitude]} zoom={1} scrollWheelZoom={false} style={{height:'500px'}}>
            <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />            
            {
            cities.map((citi,index) => <Marker key={index} position={[citi.latitude, citi.longitude]}><Popup>{citi.city}</Popup></Marker>)
            }                        
            </MapContainer>
            }
            </div>
        </>
    )
}

export default SearchMap;