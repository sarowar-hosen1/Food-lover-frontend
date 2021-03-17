import firebase from 'firebase/app';
import 'firebase/auth';
import { useState } from 'react';
import firebaseConfig from '../Config/Config.js';
import useLocalStorage from 'react-use-localstorage'
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);


export const Auth = () => {
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useLocalStorage('user', null);
    const [error, setError] = useState(null)

    //create user iwth email and psswords
    const createUser = (name, phone, email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result => {
            firebase.auth().currentUser.updateProfile({
                displayName: name,
                phoneNumber: phone,
            }).then(() => {
                const {displayName, email, phoneNumber} = result.user;
                const signUser = {name:displayName, email:email, phone:phoneNumber};
                setUser(JSON.stringify(signUser))
                history.replace(from);
            })
        })
        .catch(error => {
            setError(error.message)
        })
    }


    //Sign in with email and Password
    const signInWithEmail = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(result => {
            const {displayName, email, phoneNumber} = result.user;
            const signInUser = {name:displayName, email:email, phone:phoneNumber};
            setUser(JSON.stringify(signInUser))
            setUser(JSON.stringify(signInUser))
            history.replace(from);
        })
        .catch(error => {
            setError(error.message)
        })
    }


    //Google sign in
    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();  
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const {displayName, email, photoURL} = result.user;
            const signInUser = {name:displayName, email, photo:photoURL};
            setUser(JSON.stringify(signInUser))
            history.replace(from);
        })
        .catch(error => {
            setError(error.message);
        })}

        //Facebook singin
        const signInWithFb = () => {
            const provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then(result =>{
                const {displayName, email, photoURL} = result.user;
                const signInUser = {name:displayName, email, photo:photoURL};
                setUser(JSON.stringify(signInUser))
                history.replace(from);
            })
            .catch(error => {
                setError(error.message);
            })
        }
        // Facebook login endpoint

        //Sign Out
        const signOut = () => {
            firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('user');
                window.location.reload();
            })
            .catch((error) => {
                setError(error.message);
            })
        }
       

        return({
            user,
            error,
            createUser,
            signInWithEmail,
            googleSignIn,
            signInWithFb,
            signOut,
        })
}