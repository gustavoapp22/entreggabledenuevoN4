import axios from 'axios';
import React from 'react';

const UsersList = ({ users, alert, getUsers}) => {

const deleteMovie = (id) => {
   
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
    .then(res => {
        console.log(res)
        getUsers()
    });
}

    return (
        <div>
            
            {
                  users.map(user => ( 

                    <li key={user.id}>
                        {user.first_name}
                        <br />
                        {user.last_name}  
                        <br />
                        {user.email}
                        <br />
                        {user.password}
                        <br />
                        {user.birthday}
    
                   
                         <button onClick={() => alert(user)}>edit</button>
                       <button onClick={() => deleteMovie(user.id)} >delete</button>
                    
                    </li>
    
                    
                    
                ))
            }
        </div>
    );
};

export default UsersList;