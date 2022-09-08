import {signInWithGooglePopup, creatDocumentFromAuth} from "../../utilities/firebase/firebase.utility"


const SignIn = ()=>{

    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup()
        const userDocRef = creatDocumentFromAuth(user) 
        console.log(userDocRef);
    }


    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sigh in with Google Pop</button>
        </div>
    )
}

export default SignIn