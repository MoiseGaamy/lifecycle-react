import React, { useState, useEffect } from 'react';
import axios from "axios";


export default function UsersFunction() {
    const [users, setUsers] = useState([]);
    
    async function getUsers() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data);
    }
    useEffect(() => {
        getUsers();
    },[])
    
    return (
        <div>
            {
                users.map((user) => {
                    return (<>
                        <h1 key={user.id}>{user.name}</h1>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </>)
                })
            }
        </div>
    )
}
