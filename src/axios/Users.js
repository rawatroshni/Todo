import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API_URL = "https://jsonplaceholder.typicode.com/users"
const Users = () => {
const [users,setUsers]=useState([])
const [search , setSearch] = useState('')

    const fetchUsers = () => {
        axios.get(API_URL).then((res) => {
            console.log(res);
            setUsers(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }
useEffect(()=>{
    fetchUsers()
},[])

      


    return (
        <>
        <div>

        <div>Users</div>
        <input type='search' onChange={(e)=>setSearch(e.target.value.toLowerCase())} className='form-control w-25' placeholder='Search Users'/>
        </div>
        {
            users.filter((item)=>item.name.toLowerCase().includes(search)).map((item)=>{
                return <div>{item.name}</div>
            })
        }
         {
            users.filter((item)=>item.name.toLowerCase().includes(search)).length === 0 && (
                <div>
                    {
                        `User with this name ${search} does't exist `
                    }
                </div>
            )
         }
        </>
    )
}

export default Users