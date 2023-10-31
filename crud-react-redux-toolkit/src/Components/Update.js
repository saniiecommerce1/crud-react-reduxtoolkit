import React, {useState} from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch  } from "react-redux"
import { updateUser } from '../redux/Reducer/userReducer';
import { useNavigate } from 'react-router-dom';


export function Update(){

 const {id} = useParams()
 const dispatch= useDispatch()
 const navigate= useNavigate()

 const users = useSelector((state)=>state.users)
 console.log(users, 'this is update')
 
  const getUpdateUser = users.filter(updateuser=> updateuser.id === +id)
  console.log(getUpdateUser, 'this is updateUser')

 const {name , email} = getUpdateUser[0]

 console.log(name, email)

 const [uName, setUName] = useState(name)
 const [uEmail, setUEmail] = useState(email)

 const handleUpdate =(e)=>{
  e.preventDefault()
  console.log(uName , uEmail)

 dispatch(updateUser({
  id: +id,
  name: uName,
  email: uEmail

}))

navigate('/')
 }
 return ( 

  <div className=" bg-slate-100 min-h-screen min-w-full">
   <h1 className="xsm:text-1l md:text-2xl font-bold mb-[3rem] ml-[1rem] pt-[5rem] ">Update User</h1>
  <form onSubmit={handleUpdate}>
 <div className="xsm:text-1l md:text-2xl mb-[3rem] md:ml-[1rem]">
   <label htmlFor='name' >Name : </label>
  <input className="p-[0.5rem]" type='text' name='name' value={uName} onChange={({target})=>setUName(target.value)}/>
  </div>


 <div className="xsm:text-1l md:text-2xl mb-[3rem] ml-[1rem]">
 <label htmlFor='email' >Email : </label>
  <input className="p-[0.5rem]" type='email' name='email' value={uEmail} onChange={({target})=>setUEmail(target.value)}/>
 </div>


  <button className='bg-green-500 hover:bg-green-700 text-white xsm:text-1l md:text-2xl ml-[1rem] p-[1rem]'>Update</button>

  </form>
  </div>

 )

}
