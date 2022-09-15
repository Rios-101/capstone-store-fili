import { useState } from 'react';
// import { UserContext } from '../../context/user.context';
import { createAuthuUserWithEmailAndPassword,creatDocumentFromAuth } from '../../utilities/firebase/firebase.utility';
import FormInput from '../form-input/form-input.component';
import Button from './../button/button.component';
import "./sign-in-form.style.scss";

const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignInForm = ()=>{


    const [formField, setFormField] = useState(defaultFormField)
    const { displayName, email, password, confirmPassword} = formField
    
    // console.log(formField);

    // const {setCurrentUser} = useContext(UserContext)

    const resetFormField = ()=>{
        setFormField(defaultFormField)
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = formField

        if(password !== confirmPassword){
            alert("password doesnt match")
        }
        
        if(password === confirmPassword){
            try{
            const result = await createAuthuUserWithEmailAndPassword(email, password)
            const user = await result.user
            // setCurrentUser(user)
            user.displayName = displayName
            console.log(user);
            const userDocRef = await creatDocumentFromAuth(user)
            console.log(userDocRef);
                resetFormField()
            }catch(error){
                if (error.code === "auth/email-already-in-use") {
                    alert("The email address is already in use");
                } 
            };
           
            
        }
    }
    
    const onChangeHandler = (event)=>{
        const {name,value} = event.target
        setFormField({...formField, [name]:value})
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up With Yours Email and Password</span>

            <form onSubmit={submitHandler}>
                {/* <label>User Name</label>
                <input type="text" name="displayName" required onChange={onChangeHandler} value={displayName}/> */}
                <FormInput label="User Name" type="text" name="displayName" required onChange={onChangeHandler} value={displayName}/>
                
                {/* <label>Email</label>
                <input type="email" name="email" required onChange={onChangeHandler} value={email}/> */}
                <FormInput label="Email" type="email" name="email" required onChange={onChangeHandler} value={email}/>

                
                {/* <label>Password</label>
                <input type="password" name="password" required onChange={onChangeHandler} value={password}/> */}
                <FormInput label="Password" type="password" name="password" required onChange={onChangeHandler} value={password}/>

                
                {/* <label>Confirm Password</label>
                <input type="password" name="confirmPassword" required onChange={onChangeHandler} value={confirmPassword}/> */}
                <FormInput label="Confirm Password" type="password" name="confirmPassword" required onChange={onChangeHandler} value={confirmPassword}/>

                <Button value="Sign Up" type="submit" />
            </form>
        </div>
    )
}

export default SignInForm