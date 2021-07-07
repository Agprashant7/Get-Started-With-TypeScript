import React from 'react';
import './User.css';
export interface userInfo{
    name:string
    email:string,
    age:number,
    deleteUser:()=>void
  }


const User :React.FC<userInfo>=({name,email,age,deleteUser})=>{
    
    return(
        <div className='card'>
            <div className='cards'>
                <h2>Name:</h2>
                <p>{name}</p>

            </div>
            
          
            <div className='cards'>
                <h2>Email:</h2>
                <p>{email}</p>

            </div>
            
         
            <div className='cards'>
                <h2>Age:</h2>
                <p>{age}</p>

            </div>
            <hr/>
           <button onClick={deleteUser}>Delete</button>
        </div>
    )

}

export default User;