import React, { useState } from 'react';
import './assets/tailwind.css';
import backgroundImage from './assets/background.svg'
import logo from './logo.svg'
const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [DataInput, setDataInput] = useState("")
    const submitThis = () => {
        const info = { email: email, pass: pass }
        setDataInput([info])
        console.log(info)
    }
    return (
        <div className="grid grid-cols-2 divide-x pad">
            <div>
                <span className='brand-container'>
                    <img src={logo} className="logo" />
                    <h1 className='logoText'>Company Name</h1>
                </span>
                <br />
                <h1 className='welcomeText'> Welcome to Company Name</h1>
                <h1 className='welcomeSubText'> Welcome back! please enter your details. </h1>
                <br/>
                <form action='' onSubmit={submitThis}  className="login-form">
                <div>
                    <label htmlFor='email' >Email</label>
                    <input  type="text" name="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div>
                    <label htmlFor='pass' >Password</label>
                    <input  type="text" name="pass" id="pass" value={pass} onChange={(e) => { setPass(e.target.value) }} />
                </div>
                <button type='submit' className="btn btn--form">Login</button>
            </form>
                
            </div>
            <img src={backgroundImage} className="rightImage" />

        </div>
    )
}

export default Login