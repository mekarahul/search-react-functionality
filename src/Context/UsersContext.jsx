import { createContext, useState, useEffect} from 'react';
import data from '../data/data.json';

const UsersContext = createContext();

export const UsersProvider = ({children}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(data);
    }, [])
    
    const handleLocationSearch = function(e){
        let searchQuery = e.target.value.trim();
        let filterUsers = [];
        if(searchQuery.length > 3){
             filterUsers = users.find(user => user.first_name.indexOf(searchQuery) > -1 || user.last_name.indexOf(searchQuery) > -1 || user.email.indexOf(searchQuery) > -1)
            if(filterUsers){
                setUsers([filterUsers])
            }else{
                setUsers([])
            }
        }else{
            setUsers(data);
        }
    }

    return (
        <UsersContext.Provider value={{
            handleLocationSearch,
            users
            }}>
            {children}
        </UsersContext.Provider>
    );
}

export default UsersContext;
