import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {signInWithGooglePopup,creatDocumentFromAuth,signInWithUserEmailAndPassword} from "../../utilities/firebase/firebase.utility"
import "../log-in/log-in.style.scss"


const signInInput = {
    email: '',
    password: ''
}

const LogIn = ()=>{

    const [input, setInput] = useState(signInInput)
    const {email, password} = input

    console.log(input);
    const onChangeHandler = (event)=>{
        const {name,value} = event.target
        setInput({...input, [name]:value})
    }

    const logGoogleUser = async ()=>{
        try{
            const {user} = await signInWithGooglePopup()
            const userDocRef =await creatDocumentFromAuth(user) 
            console.log(userDocRef);
        }catch(err){
            console.log(err);
        }
    }

    const logEmailUser = async (event)=>{

        event.preventDefault();

        try{
            const {user} = await signInWithUserEmailAndPassword(email, password)
            
            const userDocRef =await creatDocumentFromAuth(user)
            console.log(userDocRef);

        }catch(err){
            console.log(err.code, err.message);
        }
    }
    

    return (
        <div className="sign-up-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={logEmailUser}>
                <FormInput label="Email" type="email" name="email" required onChange={onChangeHandler} value={email}/>
                <FormInput label="Password" type="password" name="password" required onChange={onChangeHandler} value={password}/>
                <div className="logIn">
                <Button  value="Sign In" type="submit" />
                <Button onClick={logGoogleUser} value="Sign In With Google" type="button"  buttonType="google"/>
                </div>
            </form>
        </div>
    )
}

export default LogIn