import SignInForm from './../../component/sign-in-form/sign-in-form.component';
import LogIn from '../../component/log-in/log-in.component';
import "../sign-in/sign-in.style.scss"





const SignIn = ()=>{


    return(
        <div className="signIn">
            <LogIn/>
            <SignInForm/>
        </div>
    )
}

export default SignIn