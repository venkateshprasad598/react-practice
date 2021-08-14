import React from "react"
import { useState, useEffect } from "react"

const useFetch = (url) =>{

    const [data, setdata] = useState([])

    const getFetch = async() => {
        const response = await fetch(url)
        if(response.status >= 200 && response.status < 299){
            const jsonResponse = await response.json()
            setdata(jsonResponse)
        }
    }

    useEffect(() => {
        getFetch()
    }, [])

    return {data}

}
 export default useFetch

