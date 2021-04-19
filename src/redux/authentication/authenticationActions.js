import autheneticationTypes from './authenticationsTypes'


const setAuthentication=(item)=>({
type:autheneticationTypes.SET_AUTHENTICATION,
payload:item
})

export default setAuthentication