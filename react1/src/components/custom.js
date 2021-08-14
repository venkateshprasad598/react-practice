import React from "react"
import { useState, useEffect} from "react"

const useFetch  = (url) => {
    const [people, setpeople] = useState([])

    const getFetch = async() => {
        const response = await fetch(url)
        const newResponse = await response.json()
        setpeople(newResponse)
    }

    useEffect(() => {
        getFetch()
    }, [])

    return {people}
}


export default useFetch
