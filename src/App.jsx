
import axios from 'axios';
import { useState } from 'react';
import './App.css'
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import './App.css'
import { useEffect } from 'react';

function App() {

  const [ users, setUsers ] = useState([])
const [ rambo,setRambo] = useState(null)

useEffect (() => {
  axios.get("https://users-crud1.herokuapp.com/users/")
  .then(res => setUsers(res.data));
}, [])

const getUsers = () => {
  axios.get("https://users-crud1.herokuapp.com/users/")
  .then(res => setUsers(res.data));
}

const alert = (user) =>{
   setRambo(user)
}

const deselecMovie = () => setRambo(null);

  return (
    <div className="App">
 
   <UsersForm 
   getUsers={getUsers}
    rambo={rambo} 
    deselecMovie={deselecMovie}
    />
   <UsersList 
   alert={alert}
    users={users}
    getUsers={getUsers}
    /> 

    </div>
  );
}

 

export default App
