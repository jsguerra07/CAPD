import React from "react"
import {Link} from "react-router-dom"


export default function UserHistory(userHistoryId) {
    console.log(userHistoryId, "hello")
    return (
        <div>
            <h2>Hola soy componente User History</h2>
            <Link to={"/ticket/new/" + userHistoryId.userHistoryId}>
                <button>New Ticket</button>  
            </Link>
        </div>
    )
}