import {basePath, apiVersion} from "./config"
import {getAccesToken, getRefreshToken} from "../api/auth"

export function signUpApi(data){
    const url = `${basePath}/${apiVersion}/signup`
    /*http://localhost:3977/api/v1/signup */
    console.log(url)
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json",
        },
    }

    return fetch(url, params).then((response) =>{
        return response.json()
    })
    .then((result) =>{
        if(result.user){
            return {
                user_creado: true,
                message: "Usuario creado correctamente"
            }
        }
        return {
            user_creado: false,
            message: result.message,
        }
    })
    .catch((err) =>{
        return {
            user_creado: false,
            message: err.message
        }
    })
}

export function signIn(data){
    const url = `${basePath}/${apiVersion}/signin`
    /*http://localhost:3977/api/v1/signup */
    console.log(url)
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json",
        },
    }

    return fetch(url, params).then((response) =>{
        return response.json()
    })
    .then((result) =>{
        console.log(result)
        if(result.accessToken){
            return {
                user_iniciado: true,
                message: "Sesión iniciada correctamente"
            }
            
        }
        return {
            user_iniciado: false,
            message: result.message,
        }
    })
    .catch((err) =>{
        return {
            user_iniciado: false,
            message: err.message
        }
    })
}