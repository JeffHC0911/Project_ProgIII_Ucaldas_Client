import React from "react";
import Card from "./Card"
import {Link} from "react-router-dom"
import './Admin.scss'

export default function Admin(){
    return(
        <div className="card">
            <Link to="moduleone">
            <Card></Card>
            </Link>
            <Link to="moduletwo">
            <Card></Card>
            </Link>
            <Link to="modulethree" >
            <Card></Card>
            </Link>
            <Link to="modulethree" >
            <Card></Card>
            </Link>
            <Link to="modulethree" >
            <Card></Card>
            </Link>
            <Link to="modulethree" >
            <Card></Card>
            </Link>
            <Link to="modulethree" >
            <Card></Card>
            </Link>
            <Link to="modulethree" >
            <Card></Card>
            </Link>
        </div>
        // <div>
        //     <h2>Estamos en admin</h2>
        // </div>
    )
}