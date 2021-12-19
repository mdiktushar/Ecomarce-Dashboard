import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const history = useHistory()

    const signUp = async () => {
        const data = {name, email, password};
        // console.log(data)
        let result = await fetch("http://127.0.0.1:8000/api/register",{
            method:'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify(data)
        })
        result = await result.json();
        // console.log(result)
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/add")
    }

    return (
        <div className='col-sm-6 offset-sm-3'>
            <h1>Registration</h1>
            <input type="text" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder='Name'
            className="form-control"/>
            <br />

            <input type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password'
            className="form-control"/>
            <br />

            <input type="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Email'
            className="form-control"/>
            <br />

            <button 
            onClick={signUp}
            className='btn btn-primary'>Sign Up</button>
        </div>
    )
}

export default Register;