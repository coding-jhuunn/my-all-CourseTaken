import { useState ,useEffect} from 'react';



type AuthUser ={
    name:string,
    email:string
}
const User = () => {
    const [log,setLog] = useState<AuthUser|null>(null);


    const loggedIn = ()=>{setLog({
        name:"Jhun",
        email:"jhun@gmail.com"
    })};
    const loggedOut = ()=>{setLog(null)};
  
    useEffect(()=>{},[])
  return (
    <>
    <button onClick={loggedIn}>Log In</button>
    <button onClick={loggedOut}>Log Out</button>
    <div>User name is : {log?.name}</div>
    <div>User name is : {log?.email}</div>
  </>
  )
}

export default User