import { Button, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import CustomTable from './Table/CustomTable';
import UserForm from './UserForm/UserForm';
import {User,userObject} from '../Models'
import './Users.css'
const Users = () => {
    // https://jsonplaceholder.typicode.com/users
    const [users, setUsers]=useState<userObject[]|[]>([]);
    const getUsers = async()=>{
     const response = await fetch("https://jsonplaceholder.typicode.com/users");
     const data = await response.json();
     
     const newData = data.map((elem:any)=>{
        return {...elem,key:elem.id.toString()}
     })
     setUsers(newData);
     console.log("data",data);
    }

    const getNewUser=(newUser:User)=>{
        setUsers([...users,newUser]);
    }

    useEffect(()=>{
    console.log("added new user",users);
    },[users])

    useEffect(()=>{
        getUsers();
    },[])
  return (
    <div>
        {users && <CustomTable userData={users}/>}
        <UserForm getNewUser={getNewUser}/>
    </div>
  )
}

export default Users