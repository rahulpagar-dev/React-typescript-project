import { Button, Input } from 'antd'
import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import {User} from "../../Models"
interface Props{
    getNewUser:(input:User)=>void   
}
const UserForm = ({getNewUser}:Props) => {
    interface User{
        email:string;
        name:string;
        username:string;
        website:string;   
    }
    const InitialUser ={
        email:"",
        name:"",
        username:"",
        website:"",
    }
    const [newUser, setNewUser]=useState<User>(InitialUser);
    const HandleChange=(event:any)=>{
        setNewUser({...newUser,[event.target.name]:event.target.value});
    }

    const HandleNewUser =()=>{
        getNewUser(newUser);  
    }
  return (
    <div>
        <label>Name</label>
        <Input type="text" name="name" onChange={HandleChange}></Input>
        <label>email</label>
        <Input type="text" name="email" onChange={HandleChange}></Input>
        <label>website</label>
        <Input type="text" name="website" onChange={HandleChange}></Input>
        <label>UserName</label>
        <Input type="text" name="userName" onChange={HandleChange}></Input>
        <Button onClick={HandleNewUser}>Add New User</Button>
    </div>
  )
}

export default UserForm