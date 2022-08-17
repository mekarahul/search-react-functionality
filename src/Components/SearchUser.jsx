import React from "react";
import { useContext } from 'react'
import UsersContext from "../Context/UsersContext";

function SearchUsers() {
    const {handleLocationSearch} = useContext(UsersContext);
    return (
        <div className="search-users">
            <h1>List of Users</h1>
                <input type="text" placeholder="Search" className="usr-search" onChange = {handleLocationSearch}/>
        </div>
    )
}
export default SearchUsers;