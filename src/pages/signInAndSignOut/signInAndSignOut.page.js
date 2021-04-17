import React from 'react'
import SignIn from '../../components/signIn/signIn.component.jsx'
import SignUp from '../../components/signUp/signUp.compoennt.jsx'
import './signInAndSignOut.style.scss'
const  SignInAndSignOut=()=> {
    return (
        <div className="signInAndSignUp">
          <SignIn/>  
          <SignUp/>  
        </div>
    )
}

export default SignInAndSignOut