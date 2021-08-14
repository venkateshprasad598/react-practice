import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Bio = () => {
    const [people, setpeople] = useState([

        {name : "Venkatesh", id : 1},
        {name : "Prasad", id : 2},
        {name : "Venkatesh Prasad", id : 3},

    ])

    return (
        <div>
            {people.map((data) => {
                return <div key = {data.id}>
                <h1>{data.name}</h1>
                <Link to = {`about/${data.id}`} >Learn More</Link>
                </div>
            })}
        </div>
    )
}
export default Bio