import React from "react"
import  { Link } from "react-router-dom"

const Error = () => {
    return (
        <div>
            <h1>Error</h1>
            <p>Go to home page <Link to = "/">HOME</Link> </p>
        </div>

    )
}

export default Error