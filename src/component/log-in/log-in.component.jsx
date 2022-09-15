import { useState} from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {signInWithGooglePopup,creatDocumentFromAuth,signInWithUserEmailAndPassword} from "../../utilities/firebase/firebase.utility"
import "../log-in/log-in.style.scss"
// import { UserContext } from '../../context/user.context';


const signInInput = {
    email: '',
    password: ''
}

const LogIn = ()=>{

    const [input, setInput] = useState(signInInput)
    const {email, password} = input

    // const {setCurrentUser} = useContext(UserContext)

    // console.log(input);

    const resetInput = ()=> setInput(signInInput)
    
    const onChangeHandler = (event)=>{
        const {name,value} = event.target
        setInput({...input, [name]:value})
    }

    const logGoogleUser = async ()=>{
        try{
            await signInWithGooglePopup();
            // const {user} = await signInWithGooglePopup()
            // setCurrentUser(user)
            // const userDocRef =await creatDocumentFromAuth(user) note:code 33 - 36 has been moved to user.context to uptimize our code
            // console.log(userDocRef);
        }catch(err){
            console.log(err);
        }
    }

    const logEmailUser = async (event)=>{

        event.preventDefault();

        try{
            const {user} = await signInWithUserEmailAndPassword(email, password)
            
            // setCurrentUser(user)
            const userDocRef =await creatDocumentFromAuth(user)
            resetInput()
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