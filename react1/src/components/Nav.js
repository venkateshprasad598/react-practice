import react from "react"
import { Link } from "react-router-dom"


const Nav = () => {
    return(
        <ul>
            <li>
                <Link to = "/">Home</Link>
            </li>

            <li>
                <Link to = "/about">About</Link>
            </li>

            <li>
                <Link to = "/blog">Blog</Link>
            </li>

            <li>
                <Link to = "/bio">Bio</Link>
            </li>


        </ul>
    )
}
export default Nav