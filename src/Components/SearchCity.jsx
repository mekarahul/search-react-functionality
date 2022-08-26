import React from "react";
import { useContext } from 'react'
import CitiesContext from "../Context/CitiesContext";

function SearchCities() {
    const {handleCitySearch} = useContext(CitiesContext);
    return (
        <div className="search-users">
            <h1 id="list-users-headder">List of US cities</h1>
                <input type="text" placeholder="Search" className="usr-search" onChange = {handleCitySearch}/>
        </div>
    )
}
export default SearchCities;