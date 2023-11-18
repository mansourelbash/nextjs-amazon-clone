import { createUrl, get , isStoredJwt, post, setStoredJwt } from "./api-client"

export const signUp = async(username:string,password:string) =>{
  try {
    const result = await post(createUrl("/api/signup"),{
      username, password, firstName:"Mansour",lastName:'Bashabshe'
    })
    if(!result){
      return alert("Could not sign up");
    }
    setStoredJwt(result.data.accessToken)
    return me();
  } catch (error) {
    console.log(error);
    
  }

}
export const me = async() =>{
return isStoredJwt() ? await get(createUrl("/api/me")) : null
}

export const Login = async(username:string,password:string) =>{
  try {
    const result = await post(createUrl("/api/login"),{
      username, password
    })
    if(!result){
      return alert("Could not Login");
    }
    setStoredJwt(result.data.accessToken)
    return me();
  } catch (error) {
    console.log(error);
    
  }

}