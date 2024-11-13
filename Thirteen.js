import React, { useState } from 'react'

const Thirteen = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isRegistered,setIsRegistered] = useState(false);
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [users,setUsers] = useState([]);

    const handleAuthentication = () => {
        if(isRegistered){
            //Login
            if(isRegistered){
                const user = users.find(user => user.email === email && user.password === password);
                if(user){
                    setIsLoggedIn(true);
                }
                else{
                    alert('Login Failed!Please check your credentials.')
                }
            }
        }
        else{
            //Register
            const newuser = {email,password};
            setUsers([...users,newuser]);
            localStorage.setItem('users',JSON.stringify([...users,newuser]));
            setIsLoggedIn(true);
        }
    }

    const handleLogOut = () => {
        setIsLoggedIn(false);
        setEmail('');
        setPassword('');
    }
  return (
    <div>
        {
            isLoggedIn ? (
                <div>
                    <h2>
                        Welcome, {email}!
                    </h2>
                    <button onClick={handleLogOut}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>{isRegistered?"Login" : "Register"}</h2>
                    <form>
                    <input type='email' placeholder='Email' onChange={(ele)=>{setEmail(ele.target.value)}}></input>
                    <input type='password' placeholder='Password' onChange={(ele)=>{setPassword(ele.target.value)}}></input>
                    <button onClick={handleAuthentication}>
                        {isRegistered?"Login":"Register"}
                    </button>
                    </form>
                    <p>
                    {isRegistered? "Dont have an account?Register Now": "Already have an account?Log in!"}
                    </p>
                    <button onClick={()=>setIsRegistered(!isRegistered)}>
                    {isRegistered?"Register":"Login"}
                    </button>
                </div>
            )
        }
    </div>
  )
}

export default Thirteen