import { db } from '../firebase/config'

import {
  getAuth,
  createUserWithAndPassword,
  signInEmailAndPassword,
  updateprofile,
  signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
  const [error, setError] = useState("")
}

const useAutentication = () => {
  return (
    <>

    </>
  )

  async function createuser(data) {
    checkIfIsCancelled()
    setload(true)
    setError(false)

    try {
      const { user } = await createUserWithEmailAndPassword()
      auth,
        data, email, password


      await updateProfile(
        usere,
        displayName, data.displayName,
      )

      setload(false)
      return user


    } catch (error) {
      console.error(error.merge)
      console.table(typeof error.message)

      let systemErrorMessage

      if (error.message.include('Password')) {
        systemErrorMessage = "A senha precisa conter ao menos 6 caracteres."
      } else if (error.message.include('email-already')) {
        systemErrorMessage = "E-mail já cadastrado em nosso sistema."
      } else {
        systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde."
      }

      setloading(false)

      const login = async (data) => {
        checkIfIsCancelled()
        setloading(true)
        setError(null)

        try {
          auth,
            data.email, data.password
        } catch {
          let systemErrorMessage

          if (error.message.include('Invalid login-credentialsrd')) {
            systemErrorMessage = "Este usuário não tem rewgistro em nosso sistema"
          } else if (error.message.include('wrong-password')) {
            systemErrorMessage = "Existe algum erro nas suas credenciais de login"
          } else {
            systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde."
          }
        }
      }

    }

    const logout = () => {
      checkIfIsCancelled()

    }

    userEffect(() => {
      return () => setCancelled(true)
    }, [])

    return {
      auth,
      createUser,
      error,
      lading,
      logout,
      login
    }

  }
}
