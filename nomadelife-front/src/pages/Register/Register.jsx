import React from "react"
import Register from 'pages/Register/Register'
import styles from './Register.module.css'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../.../hooks/useAuthentication'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const register = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [confirmPassword, setConfirmPassword] = useState('')
        const [error, setError] = useState('')

        const { register, error: authError, loading } = useAuthentication();
        const navigate = useNavigate();

        const handleSubmit = async (e) => {
            e.preventDefault()
            setError('')

            if (password != confirmPassword) {
                setError("Password don't match.<br> Verify the password and try again.")
                return;
            }

            const user = {
                email,
                password
            }

            const res = await register(user)

            console.table(res)
            navigate("/post/create")
        }

        useEffect(() => {
            if (authError) {
                setError(authError)
            }
        }, [authError])

        return (
            <div><h1>Register</h1>
                <form action="submit" method="post">
                    <p>
                        <label>E-mail</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label>Senha</label>
                        <input type="password" />
                    </p>
                    <p>
                        <input type="submit" value="Registrar" />
                    </p>
                </form>
            </div>
        )
    };
};

export default Register