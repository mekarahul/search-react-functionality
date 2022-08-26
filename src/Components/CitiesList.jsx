import React from 'react'
import { useContext } from "react";
import CitiesContext from "../Context/CitiesContext";
export function CitiesList() {
    let columns = ["zip code", "Latitude", "Longitude", "City", "State", "County"];
    const {cities} = useContext(CitiesContext);
    return (
        <>
        
        {<h1>{`No of citys found: `+cities.length}</h1>}
        {cities.length > 0 ? <table className="back-gray" id="cities">
        <thead >
            <tr id={0}>
            {columns.map(col => <th key={col}  className="border-solid center">{col}</th>)}
            </tr>
        </thead>
        <tbody>
         {cities.map((city) => {
             return <tr key={city?.zip_code}>
                <td key={'td-id'+city?.zip_code}>{city.zip_code}</td>
                <td key={'td-fname'+city?.id}>{city.latitude}</td>
                <td key={'td-lname'+city?.id}>{city.longitude}</td>
                <td key={'td-email'+city?.id}>{city.city}</td>
                <td key={'td-gender'+city?.id}>{city.state}</td>
                <td key={'td-address'+city?.id}>{city.county}</td>
            </tr>
        })}
        </tbody>
        </table>:<h1>{"No data found"}</h1>}
        
        </>
    )
}
