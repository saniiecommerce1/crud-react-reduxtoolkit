import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../Components/Data";


const userSlice = createSlice({
 name: 'User',                   //used in type: User/addUser
 initialState: userList,
 reducers: {
  addUser: (state, action) =>{
   console.log(action)
   state.push(action.payload)
  },

  updateUser: (state, action) =>{
   console.log(action.payload , 'this is payload')

   const {id , name , email } = action.payload
   const userToUpdate = state.find(user => user.id === id)
   if (userToUpdate){
    userToUpdate.name = name
    userToUpdate.email = email
   }   
 },

removeUser  : (state, action)=>{
 const {id} = action.payload
 console.log(id)
 const userToRemove = state.find(user => user.id === id)
 // console.log(userToRemove, "this is to remove")


if(userToRemove){
 return state.filter(user=> user.id !== id )
}


}

}}
)

export const {addUser, updateUser, removeUser} = userSlice.actions;
export default userSlice.reducer;
