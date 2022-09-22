import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers, rambo, deselecMovie}) => {

    const { register, handleSubmit, reset} = useForm();
   
     
    useEffect(() => {
        if(rambo){
            reset(rambo)
             

        }
  },[rambo])

 const submit = (data) => {
    if(rambo){
       axios.put(`https://users-crud1.herokuapp.com/users/${rambo.id}/`, data
       
       
       
       )
       .then(() => getUsers());


    } else {

        axios.post("https://users-crud1.herokuapp.com/users/" , data)
      
        .then(() => getUsers())
      
        .catch(error => console.log(error.response)); 
    }
   clear();
 }
 
 const clear = () => {
    reset({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        birthday:"",

    })
    deselecMovie();
 }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1>New User</h1>
        <div className='nose'>
            <label htmlFor="first_name">first name</label>
            <input type="text" id="first_nam" {...register("first_name")}/>
        </div>
        <div className='nose'>
            <label htmlFor="lat_name">lat name</label>
            <input type="text" id="last_name" {...register("last_name")} />
        </div>
        <div className='nose'>
            <label htmlFor="email">email</label>
            <input type="text" id="email" {...register("email")} />
        </div>
        <div className='nose'>
            <label htmlFor="password">password</label>
            <input type="text" id="password" {...register("password")}/>
        </div>
        <div className='nose'>
            <label htmlFor="birthday">birthday</label>
            <input type="date" id="birthday" {...register("birthday")} />
        </div>
        <button>Submit</button>
        <button onClick={clear} type=" button">
            Clear</button>
      </form>
    );
};

export default UsersForm;