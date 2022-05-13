import React from 'react'
import './login.css';

const login = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='image-login'>
                    <img className='login-img' src='images/Login-car.jpg'/>
                </div>
           <div className='col'>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text"/>
                </label>

                <label>
                    <p>Password</p>
                    <input type="password"/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            </div>

            </div>
        </div>
    );
}

export default login
