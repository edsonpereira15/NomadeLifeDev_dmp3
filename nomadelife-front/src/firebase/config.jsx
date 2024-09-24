import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD0iSC7ti69DsredHGKJ63KXfEDnsJfQLU",
  authDomain: "nomadelife-eds.firebaseapp.com",
  projectId: "nomadelife-eds",
  storageBucket: "nomadelife-eds.appspot.com",
  messagingSenderId: "971309036963",
  appId: "1:971309036963:web:34eabe98d1c9d28f84d616",
  measurementId: "G-BP2XY87BVS"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFireStore(app)

//Continuação

import { db } from '../firebase/config'
import{
    getAuth,
    CreateUserWithEmailAndPassword,
    SignInAuthEmailAndpassword,
    UpdateProfile,
    signOut
}
import { useState, useEffect } from 'react'

 export const useAuthentication = () =>{
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(null)
    const [cancelled, setCancelled] = useState(false)
}

const auth = getAuth()

function checkIfIsCancelled(){
    if(cacelled){
        return
    }
}


  