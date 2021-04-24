import {createSelector} from 'reselect'

const authState=state=>state.authentication;
export const authenticationSelector=createSelector(

    [authState],
    (authentication)=>authentication.currentUser
)