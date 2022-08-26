import { createContext, useState, useEffect} from 'react';
import Cities from '../data/Cities.json';

const CitiesContext = createContext();

export const CitiesProvider = ({children}) => {
    const [cities, setCities] = useState([]); 

    useEffect(() => {
        setCities(Cities);
    }, [])
    
    // const handleLocationSearch = function(e){
    //     let searchQuery = e.target.value.trim();
    //     let filterUsers = [];
    //     if(searchQuery.length > 3){
    //          filterUsers = users.find(user => user.first_name.indexOf(searchQuery) > -1 || user.last_name.indexOf(searchQuery) > -1 || user.email.indexOf(searchQuery) > -1)
    //         if(filterUsers){
    //             setUsers([filterUsers])
    //         }else{
    //             setUsers([])
    //         }
    //     }else{
    //         setUsers(data);
    //     }
    // }

    const handleCitySearch = function(e){
        let searchZip = e.target.value.trim();
        let filteredZips = [];
        if(searchZip.length > 2){
            filteredZips = cities.find(city => city.zip_code === parseInt(searchZip))
            if(filteredZips){
                setCities([filteredZips])
            }else{
                setCities([]);
            }
        }else{
            setCities(...[Cities]);
        }
        
    }

    return (
        <CitiesContext.Provider value={{
            handleCitySearch,
            cities
            }}>
            {children}
        </CitiesContext.Provider>
    );
}

export default CitiesContext;
