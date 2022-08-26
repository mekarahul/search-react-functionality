import React from "react";
import { useContext } from "react";
import { CitiesList } from "./CitiesList";
import CitiesContext from "../Context/CitiesContext";
import SearchMap from "./SearchMap";
import SearchCity from './SearchCity';
function Cities(){
    const {cities} = useContext(CitiesContext);
        return(
            <>
            <div className='list-cities-container'>
            <SearchCity />
            {cities.length > 0 ?<CitiesList/>:<h1>{'No city found'}</h1>}
            {cities.length > 0 && <SearchMap/>}
            </div>
            </>
        )
}

export default Cities;
