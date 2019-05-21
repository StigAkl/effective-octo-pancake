import {isValid, getIdFromToken} from "../utils/utils"; 

const localStorageKey = process.env.REACT_APP_LOCAL_TOKEN || "localToken"; 

export const isAuthenticated = () => {
    const token = getToken();  

    console.log("TOKEN:", token); 

    console.log(isValid(token)); 
    if(!token || !isValid(token)) return false; 

    return true; 
}

export const getToken = () => {
    return localStorage.getItem(localStorageKey); 
}

export const getId = () => {
    const token = getToken(); 

    if(!token || !isValid(token)) return undefined; 

    return getIdFromToken(token); 
}

export const logIn = (token) => {
    localStorage.setItem(localStorageKey, token)
}

export const logOut = () => {
    localStorage.removeItem(localStorageKey); 
}