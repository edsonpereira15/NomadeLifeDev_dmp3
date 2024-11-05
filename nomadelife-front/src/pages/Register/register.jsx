import React from "react";
import Register from 'pages/Register/Register';
import RegisterStyles from 'pages/Register/register.module.css';




 const Register = () => {
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
  );
};

export default Register