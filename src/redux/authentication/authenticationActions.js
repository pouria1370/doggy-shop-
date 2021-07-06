import autheneticationTypes from './authenticationsTypes'



export const googleSignInFailure=(error)=>({
type:autheneticationTypes.GOOGLE_SIGN_IN_FAILURE,
payload:error.message
})
export const googleSignInStart=()=>({
type:autheneticationTypes.GOOGLE_SIGN_IN_START,
})
export const SignInSuccess=(item)=>({
type:autheneticationTypes.SIGN_IN_SUCCESS,
payload:item
})
export const emailAndPassSignInFailure=(error)=>({
type:autheneticationTypes.EMAIL_SIGN_IN_FAILURE,
payload:error.message
})
export const emailAndPassSignInStart=(emailPass)=>({
type:autheneticationTypes.EMAIL_SIGN_IN_START,
payload:emailPass
})
export const signUpSuccess=(item)=>({
type:autheneticationTypes.SIGN_UP_SUCCESS,
payload:item
})
export const signUpFailure=(error)=>({
type:autheneticationTypes.SIGN_UP_FAILURE,
payload:error.message
})
export const signUpStart=(emailPass)=>({
type:autheneticationTypes.SIGN_UP_START,
payload:emailPass
})
export const signOutSuccess=()=>({
type:autheneticationTypes.SIGN_OUT_SUCCESS,
})
export const signOutFailure=(error)=>({
type:autheneticationTypes.SIGN_OUT_FAILURE,
payload:error.message
})
export const signOutStart=()=>({
type:autheneticationTypes.SIGN_OUT_START,

})
export const authenticationCheckUp=()=>({
    type:autheneticationTypes.CHECK_AUTHENTICATON,
})
