import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../ActionTypes"

const initialState ={
    accessToken:sessionStorage.getItem("userToken")?sessionStorage.getItem("userToken"):null,
    user:sessionStorage.getItem("userProfile")?JSON.parse(sessionStorage.getItem("userProfile")):null,
    loading:false,
}


export const authReducer =(state= initialState,action)=>{
   switch(action.type){
    case LOGIN_REQUEST:
    return{
        ...state,
        loading:true,
    }
    case LOGIN_SUCCESS:
        console.log(action.payload)
        return {
            ...state,
            accessToken:action.payload,
            loading:false
        }
        case LOGIN_FAIL:
        return {
            ...state,
            accessToken:null,
            loading:false,
            error:action.payload
        }
    case LOAD_PROFILE:
        return{
            ...state,
            user:action.payload
        }
        case LOG_OUT:
            return{
                ...state,
                accessToken:null,
                user:null
            }
    default:
        return state
   }
}