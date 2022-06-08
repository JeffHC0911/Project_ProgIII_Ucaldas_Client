import React, {useState, useEffect, createContext} from "react"
import {
    getAccesToken,
    getRefreshToken,
    refreshAccessToken,
    logout
} from "../api/auth"
import jwtDecode from "jwt-decode"

export const AuthContext = createContext()

export default function AuthProvider(props){
    console.log(props)
    const {children} = props
    const [user, setUser] = useState({
        user: null,
        isLoading: true
    })
    useEffect(() =>{
        checkUserLogin(setUser)
    }, [])
    /*Devolvemos la página web para App.js */
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

const checkUserLogin = (setUser) => {
    console.log("Checking if Jeff is login")
    const accessToken = getAccesToken()
    /*Validamos si el token es inválido o nulo */
    if (!accessToken){
        const refreshToken = getRefreshToken()
        /*Validamos si el token caducó o expiró */
        if (!refreshToken){
            /*Si hay algo en el localStorage lo eliminamos */
            logout()
            setUser({
                user: null,
                isLoading: false,
            })
        }else refreshAccessToken(refreshToken)
    }else{
        /*Validamos si el accessToken es válido */
        setUser({
            user: jwtDecode(accessToken),
            isLoading: false
        })
    }
}