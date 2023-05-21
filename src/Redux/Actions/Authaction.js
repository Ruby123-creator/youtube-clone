
import { signOut ,GoogleAuthProvider ,signInWithPopup } from "firebase/auth";
import { auth } from '../../firbase';

import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../ActionTypes';
const provider = new GoogleAuthProvider();

 export const  Login=(dispatch)=>{
    dispatch({
        type:LOGIN_REQUEST,
    })
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
signInWithPopup(auth, provider)
  .then((result) => {
    // console.log(result)
    const token = result.user.accessToken;
    let profile={
        name:result.user.displayName,
        photoUrl:result.user.photoURL,
    }
    sessionStorage.setItem("userToken",token)
    sessionStorage.setItem("userProfile",JSON.stringify(profile))
    dispatch({
        type:LOGIN_SUCCESS,
        payload:token,
    })
    dispatch({
        type:LOAD_PROFILE,
        payload:profile,
    })

  }).catch((error) => {
    console.log(error.message)
    dispatch({
        type:LOGIN_FAIL,
        payload:error.message
    })
  });
      
}

export const log_out = dispatch=>{
  // console.log("idhr aaya")
  dispatch({
    type:LOG_OUT,
  })
    signOut(auth).then(()=>{
      
      sessionStorage.removeItem("userToken")
      sessionStorage.removeItem("userProfile")
    })
    .catch((e)=>{
        console.log(e)
    })
}