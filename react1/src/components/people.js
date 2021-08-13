import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect} from 'react';

let data = [
    {name : "venkatesh Prasad", age : 23, id : 1},
    {name : "London", age : 23, id : 2},
    {name : "Paris", age : 23, id : 3},
]

const People = () => {

    const {id} = useParams()
    const [name, setName] = useState("MY NAME")

    useEffect(() => {
        let newName = data.find((person) => person.id === parseInt(id))
        setName(newName.name)
    }, [])

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default People
