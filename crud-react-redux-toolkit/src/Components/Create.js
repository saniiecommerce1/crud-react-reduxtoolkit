import React , { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/Reducer/userReducer';
import { useNavigate } from 'react-router-dom';



export function Create(){
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const navigate = useNavigate()
const dispatch = useDispatch()

const users = useSelector((state) => state.users)
console.log(users[users.length - 1].id + 1)

const handleSubmit = (e)=>{
 e.preventDefault()
 dispatch(addUser({id: users[users.length - 1].id + 1 , name: name, email:email}))
 navigate('/')
}


 return (
  <>
  <div className="text-2xl">
   <h1>Add New User</h1>
  <form onSubmit={handleSubmit}>
 <div> <label htmlFor='name' >Name : </label>
  <input type='text' name='name' value={name} onChange={({target})=> setName(target.value)}/>
  </div>


 <div>
 <label htmlFor='email' >Email : </label>
  <input type='email' name='email' value={email} onChange={({target})=> setEmail(target.value)}/>
 </div>


  <button>Submit</button>

  </form>
  </div>
  </>
 )
}