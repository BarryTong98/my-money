import styles from './Signup.module.css'

import React, {useState} from 'react';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email,password,displayName)
    }

    return (
        <form className={styles['signup-form']} onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <label>
                <span>email:</span>
                <input
                    type={"email"}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                />
            </label>
            <label>
                <span>password:</span>
                <input
                    type={"password"}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                />
            </label>
            <label>
                <span>display name:</span>
                <input
                    type={"text"}
                    onChange={(e) => {
                        setDisplayName(e.target.value)
                    }}
                    value={displayName}
                />
            </label>
            <button className={"btn"}>Login</button>
        </form>
    );
}

export default Signup;