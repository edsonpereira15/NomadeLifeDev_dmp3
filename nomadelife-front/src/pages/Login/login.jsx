import React from 'react'
import useState, useEffect, fromimport { useAuthentication } from '../../firebase/config'
 'react'
import (useAuthentication) from '../..hooks/useAuthentication'

import 

const login = () => {
    cons [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {login, error:autherror, loading } = useAuthentication
    const navigate = useState('')

    const handlerSubmit = async(e) =>{
        e.preventDefault()
        setError('')
        const user = {
            email
            password
        }

        const res = await login(user)

        console.table(res)
        navigate("post/create")
    }

    useInsertionEffect(() =>{
        if (authError) {
            setError(authError)
        }
    }
    
    )
  return (
    <div className=styles.login></div>
    <h1>Entrar no NomadeLife</h1>
    <form onSubmit={handlerSubmit}>
        <label>
            <span>E-mail</span>
            <input
            type='email'
            required
            value={email}
            onChange{e} => setEmail(e.target.value)
            placeholder = 'Entre com seu e-mail'
            </label>
            ></input>
        </label>

        <label>
            <span>E-mail</span>
            <input
            type='password'
            required
            value={email}
            onChange{e} => setPassword(e.target.value)
            placeholder = 'Entre com sua senha'
            </label>
            ></input>
        </label>
        {}
        {}
        {}

    </form>
  )
}

export default login