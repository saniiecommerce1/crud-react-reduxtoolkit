import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../redux/Reducer/userReducer';

export function Home(){

 const users = useSelector((state) => state.users)
 console.log(users)

 const dispatch = useDispatch()

const removeHandle = (id)=>{
dispatch(removeUser({id: +id}))
}

return(
 <>
 <div className=" bg-slate-100 min-h-screen min-w-full">
  <h1 className='xsm:text-1l md:text-2xl font-bold mb-[5rem] ml-[1rem] pt-[5rem]'>Crud App Using React and Redux Toolkit</h1>
  <Link to='/create' className='bg-green-500 hover:bg-green-700 text-white p-[1rem] xsm:text-1l md:text-3xl ml-[1rem]'>Create +</Link>
  <table className="xsm:text-1l md:text-2xl md:p-[2rem] xsm:p-[0.5rem] border-collapse border border-slate-300 table-fixed ml-[1rem] mt-[2rem] bg-slate-200">
  <thead>
    <tr>
      <th className="border border-slate-500 p-5">Id</th>
      <th className="border border-slate-500 p-5">Name</th>
      <th className="border border-slate-500 p-5">Email</th>
      <th className="border border-slate-500 p-5">Action</th>
    </tr>
  </thead>
<tbody>

{users.map((user, index)=>(

 <tr key={index} className="border border-slate-300 p-5">
<td className="border border-slate-500 p-5">{user.id}</td>
<td className="border border-slate-500 p-5">{user.name}</td>
<td className="border border-slate-500 p-5">{user.email}</td>

<td className="border border-slate-500">
<Link to={`/edit/${user.id}`} className=' bg-slate-400 hover:bg-slate-700 text-white xsm:text-1xl md:text-2xl p-[0.5rem] mx-[2rem]'>Edit</Link>

<button className='bg-slate-400 hover:bg-slate-700  text-white xsm:text-1xl md:text-2xl  p-[0.5rem] mr-[2rem]' onClick={()=>removeHandle(user.id)}>Remove</button>

</td>

</tr>
))
}

</tbody>
 </table>





</div>
 
 
 
 
 </>
)

}