import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Bio from "./Bio"
import Error from "./Error"
import Nav from "./Nav"
import Blog from "./blog"
import People from "./people"

const ReactSetup = () => {
    return <Router>
<Nav/>

<Switch>

<Route exact path = "/">
    <Home/>
</Route>

<Route path = "/about">
    <About/>
</Route>


<Route path = "/bio">
    <Bio/>
</Route>

<Route path = "/blog">
    <Blog/>
</Route>

<Route path = "/people/:id" children = {<People/>}>
</Route>

<Route path = "*">
    <Error/>
</Route>

</Switch>
    </Router>
}


export default ReactSetup