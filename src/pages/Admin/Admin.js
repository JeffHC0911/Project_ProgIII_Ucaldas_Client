import React from "react";
import Card from "./Card"
import {Link} from "react-router-dom"

export default function Admin(){
    return(
        <div>
            <h2>Cards</h2>
            <Link to="moduleone">
            <Card></Card>
            </Link>
            <Link to="moduletwo">
            <Card></Card>
            </Link>
            <Link to="modulethree" >
            <Card></Card>
            </Link>
        </div>
    )
}