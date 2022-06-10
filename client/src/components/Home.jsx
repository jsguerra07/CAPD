import React from "react";
import { useState, useEffect } from "react";
//import Project from "./Project"
import { Link } from "react-router-dom"

export default function Home() {

    const [projects, setProjects] = useState([])

    const loadProjects = async () => {
        const response = await fetch("http://localhost:3001/projects")
        const data = await response.json()
        console.log(data, "en front projects")
        setProjects(data)
    }
    useEffect(() => {
        loadProjects()
    }, [])

    return (
        <div>
            <h1>PROJECTS</h1>
            {
                projects.length !== 0 ? projects.map((p) => {
                    return (
                        <div key={p.id}>
                            <hr></hr>
                            <h3>{p.name.toUpperCase()}</h3>
                            <hr></hr>
                            <h4>USER HISTORIES</h4>
                            {
                                p.userHistories.map((uh) => {
                                    return (
                                        <div key={uh.id}>
                                            <Link to= {"/userHistories/" + uh.id}><li><h4>{uh.name}</h4></li></Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }) : <h3>No projects to show</h3>
            }
        </div>
    )
}

