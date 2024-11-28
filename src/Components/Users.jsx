import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Users() {

    const viewers = useLoaderData()
    const [users, setUsers] = useState(viewers)

    const handleDelete = (id)=>{
        console.log("deleted id number", id);
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert("deleted successfully");
                const newUsers = users.filter(user => user._id!== id);
                setUsers(newUsers);
            }
        })
       
    }

  return (
    <>
       <h2>Users All Data Length here now {users.length}</h2>
       {
        users.map((viewer) => (
            <div key={viewer._id}>
                <p>{viewer.name} : {viewer.email} : {viewer._id} <Link to={`update/${viewer._id}`}><button>Update</button></Link> <button onClick={()=> handleDelete(viewer._id)}>x</button></p>
            </div>
        ))
       }
    </>
  )
}
