import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Blog = () => {

    const [people, setpeople] = useState([
        {name : "venkatesh Prasad", age : 23, id : 1},
        {name : "London", age : 23, id : 2},
        {name : "Paris", age : 23, id : 3},
    ])


    return (
        <div>
            {people.map((data) => {
                return <div key= {data.id}>
                    <h1>{data.name}</h1>
                    <p>{data.age}</p>
                    <Link to = {"people/"+ data.id} >Learn More</Link>
                </div>
            })}
        </div>
    )
}

export default Blog