import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Update() {

   const updataProfile = useLoaderData();

   const handleSubmit = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user);

    fetch(`http://localhost:5000/user/${updataProfile._id}`, {
      method: "PUT",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
        if(data.modifiedCount > 0){
            alert("updated successfully");
        }
    })
    
   }

  return (
    <>
    <div>Update Information of {updataProfile.name}</div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" defaultValue={updataProfile?.name} id="" /><br />
      <input type="text" name="email" defaultValue={updataProfile?.email} id="" /><br />
      <input type="submit" value="Update"  id="" />
    </form>
    </>
  )
}
