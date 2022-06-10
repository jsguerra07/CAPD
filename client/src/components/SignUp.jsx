import React from "react"
import { Link } from "react-router-dom"

export default function SingUp() {
    return (
        <div>
            <h1>SignUp</h1>
            <form>
                <label>Name:</label>
                <input placeholder="Name..."></input><br></br>
                <label>LastName:</label>
                <input placeholder="LastName..."></input><br></br>
                <label>E-mail:</label>
                <input placeholder="E-mail..."></input><br></br>
                <label>Password:</label>
                <input placeholder="Password..."></input><br></br>
                <label>Assinged Company:</label>
                <select >
                    <option>Porsche</option>
                    <option>Mazda</option>
                    <option>Audi</option>
                </select><br></br><br></br>
                <Link to="/home">
                    <button type="submit">Send</button>
                </Link>
            </form>
        </div>
    )
}