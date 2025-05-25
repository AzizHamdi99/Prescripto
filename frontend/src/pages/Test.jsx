import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Test() {

    const [users,setUsers]=useState([]);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    
useEffect(()=>{

    axios.get('http://localhost:5000/users').then(res=>{
    setUsers(res.data);
})
.catch(error=>{
    console.log('error fetching user',error);
})
},[])   

const adduser=(e)=>{
e.preventDefault();
axios.post('http://localhost:5000/add_user', { name, email })
  .then(() => {
    setUsers([...users, { name, email }]);
    setName('');
    setEmail('');
  })
  .catch(error => {
    console.error('Error adding user:', error);
  });


}
  return (
    <div className="App">
    <h1>User List</h1>
    <ul>
      {users.map((user, index) => (
        <li key={index}>
        {user.name} - {user.email}
        </li>
      ))}
    </ul>

    <h2>Add New User</h2>
    <form onSubmit={adduser}>
      
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  </div>
);

  
}

export default Test
