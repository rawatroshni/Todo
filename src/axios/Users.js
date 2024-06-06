import axios from 'axios';
import React from 'react'
const API_URL = "https://jsonplaceholder.typicode.com/user"
const Users = () => {


    const fetchUsers = () => {



        axios.get(API_URL).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }


    fetchUsers()


    return (
        <div>Users</div>
    )
}

export default Users