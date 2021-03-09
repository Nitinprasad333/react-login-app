export const Session =(props)=> {
    const userSession = JSON.parse(sessionStorage.getItem("userSession"));
    console.log("Session Data", userSession)

   return userSession ;
}


