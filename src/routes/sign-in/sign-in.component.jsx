// import { useEffect } from "react"
// import { getRedirectResult } from "firebase/auth"
// import {auth,signInWithGoogleRedirect} from "../../utilities/firebase/firebase.utility"
import {signInWithGooglePopup,creatDocumentFromAuth} from "../../utilities/firebase/firebase.utility"
import SignInForm from './../../component/sign-in-form/sign-in-form.component';





const SignIn = ()=>{

    // useEffect(()=>{
    //    async function fetchData (){
    //     const result = await getRedirectResult(auth);
    //     if(result){
    //         const userDocRef = await creatDocumentFromAuth(result.user);
    //         console.log(userDocRef);
    //     }
    //    }
    //    fetchData()
    // },[])
    // note= all the comment lines are for the sign in with google redirect

    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup()
        const userDocRef =await creatDocumentFromAuth(user) 
         console.log(userDocRef);
    }
    


    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sigh in with Google Pop</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sigh in with Google Redirect</button> */}
            <SignInForm/>
        </div>
    )
}

export default SignIn