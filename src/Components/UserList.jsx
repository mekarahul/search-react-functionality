import React from 'react'
export function UserList({users}) {
    let columns = ["ID", "First Name", "Last Name", "Email", "Gender", "IP Address"];
    return (
        <>
        {<h1>{`No of users found: `+users.length}</h1>}
        {users.length > 0 ? <table className="back-gray" id="users">
        <thead >
            <tr id={0}>
            {columns.map(col => <th key={col}  className="border-solid center">{col}</th>)}
            </tr>
        </thead>
        <tbody>
         {users.map((user) => {
             return <tr key={user?.id}>
                <td key={'td-id'+user?.id}>{user.id}</td>
                <td key={'td-fname'+user?.id}>{user.first_name}</td>
                <td key={'td-lname'+user?.id}>{user.last_name}</td>
                <td key={'td-email'+user?.id}>{user.email}</td>
                <td key={'td-gender'+user?.id}>{user.gender}</td>
                <td key={'td-address'+user?.id}>{user.ip_address}</td>
            </tr>
        })}
        </tbody>
        </table>:<h1>{"No data found"}</h1>}
        </>
    )
}
