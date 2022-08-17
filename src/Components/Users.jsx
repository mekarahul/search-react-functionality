import React from "react";
import SearchUsers from "./SearchUser";
import { useContext } from "react";
import { UserList } from "./UserList";
import UsersContext from "../Context/UsersContext";

function Users(){
    const {users} = useContext(UsersContext);
    
        return(
            <>
            <SearchUsers/>
            {users.length > 0 ?<UserList users={users}/>:<h1>{'No users found'}</h1>}
            </>
        )
}

export default Users;
