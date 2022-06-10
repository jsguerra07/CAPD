import React from "react"
import {Link} from "react-router-dom"

export default function Login() {
    return (
        <div>
            <h1>Login</h1>

            <form>
                <label>User:</label>
                <input placeholder="E-mail..."></input><br></br>
                <label>Password:</label>
                <input placeholder="Password..."></input><br></br><br></br>

                <Link to ="/home">
                    <button type="submit">Send</button>
                </Link>
            </form>

        </div>
    )
}