import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User,{userInfo} from './components/User'

const App :React.FC=()=>{

  // const[userState,setUserState]=useState<{currentUser:{name:string,email:string,age:number}}>({
  //   currentUser:{
  //     name:'',
  //     email:'',
  //     age:0
  //   }
  // })
  interface allUserInfo{
    currentUser:userInfo,
    allUser:Array<userInfo>
   }
   const[userState,setUserState]=useState<allUserInfo>({
     currentUser:{
       name:'',
       email:'',
       age:0,
       deleteUser:()=>{}
     },
     allUser:[]
   })

  const onUserChange=(ev:React.ChangeEvent<HTMLInputElement>):void=>{
      console.log("$$$$",ev.target.value)

      setUserState({
        ...userState,
        currentUser:{
          ...userState.currentUser,[ev.target.name]:ev.target.value
        }
      })
  }

  const onSubmitForm=(e:React.SyntheticEvent):void=>{
    e.preventDefault();
 // userState.allUser.push(userState.currentUser)
    setUserState({
      currentUser:{
        name:'',
        email:'',
        age:0,
        deleteUser:()=>{}
      },
      allUser:[
        ...userState.allUser,
        userState.currentUser
      ]
    })

  }

  const onDelete=(i:number):void=>{
    const deleteUser=userState.allUser.filter((user,n)=>{
      return n!==i
    })
    setUserState({
    ...userState,
      allUser:deleteUser
    })
  }
  console.log("****",userState)
  return (
    <div className='container'> 
    <h1>Todo with TS</h1>
     <form onSubmit={onSubmitForm} className='card'>
       <label>
         Name:
       </label>
       <input
       required
       id='username'
       type='text'
       value={userState.currentUser.name}
       name='name'
       onChange={onUserChange}
      / >
          <label>
         Email:
       </label>
       <input
       required
       id='email'
       type='email'
       value={userState.currentUser.email}
       name='email'
       onChange={onUserChange}
      / >
          <label>
         Age:
       </label>
       <input
       required
       id='age'
       type='number'
       value={userState.currentUser.age}
       name='age'
       onChange={onUserChange}
      / >
        <button type='submit'>Add User</button>
  
     </form>

       {
       userState.allUser?userState.allUser.map((res,i)=>(
        <User 
        key={i}
         name={res.name} 
         email={res.email} 
         age={res.age} 
         deleteUser={()=>onDelete(i)}
         />
       
       )):
       ""
       }
    
    </div>
  
  );
}

export default App;
