import React from "react"
import RouterSetUp from "./components/Index"


const App = () => {
    return (
        <div>
            <RouterSetUp/>
        </div>
    )
}
export default App



















// const myContext = createContext()
// const App = () => {
//     const name = "Venkatesh Prasad"
//     const age = 23

//     return (
//         <myContext.Provider value = {{name, age}}>
//         <div>
//             <List1/>
//         </div>
//         </myContext.Provider>
//     )
// }

// const List1 = () => {
//     return(
//         <List2/>
//     )
// }

// const List2 = () => {
//     return(
//         <List3/>
//     )
// }

// const List3 = () => {
//     const newContext = useContext(myContext)
//     return(
//         <div>
//             <h1>My name is {newContext.name} and i am {newContext.age} years old</h1>
//         </div>
//     )
// }

// export default App


























//CONTEXT API
// const myContext = createContext()

// const App = () => {

//     const [people, setpeople] = useState([
//         {name : "Venkatesh", id : 1},
//         {name : "Prasad", id : 2},
//         {name : "Venkatesh Prasad", id : 3},
//     ])

//     const handleChange = (num) => {
//         let newPeople = people.filter((data) => data.id !== num)
//         console.log(newPeople);
//         setpeople(newPeople)
//     }
//     return (
//         <div>
//             <myContext.Provider value = {{handleChange}}>
//             {people.map((data) => {
//                 return <List1 name = {data.name} id = {data.id} key = {data}/>
//             })}
//             </myContext.Provider>
//         </div>
//     )
// }


// const List1  = ({name, id}) => {
//     return (

//         <List2 name = {name} id = {id}/>
     
//     )
// }

// const List2 = ({name, id}) => {
//     const newContext = useContext(myContext)

//     return(
//         <div>
//             <h1>Name : {name}</h1>
//             <button onClick = { () => newContext.handleChange(id)}>Remove</button>
//         </div>
//     )
// }

// export default App































// const App = () => {
//     const [person, setperson] = useState({ name: "" })
//     const [people, setpeople] = useState([])

//     const handleChange = (event) => {
//         const { name, value } = event.target
//         setperson({ ...person, [name]: value })
//     }

//     const handleClick = () => {
//         // event.preventDefault()
//         if(person.name && person.email){
//             setpeople([{...person, id : new Date().getTime()}])
//         }

//     }

    
//     return (
//         <div>
//             <form>
//                 <div>
//                     <input type="text"
//                         name="name"
//                         value={person.name}
//                         onChange={handleChange}
//                         placeholder="Your Name" />
//                 </div><br />

//                 <div>
//                 <input type="email"
//                     name="email"
//                     value={person.email}
//                     onChange={handleChange}
//                     placeholder="E-mail" />
//                 </div><br />

//             </form>
//             <button onClick = {handleClick}>Submit</button>

//             {people.map((data) => {
//                 return <div key = {data.id}>
//                         <h1>{data.name}</h1>
//                         <p>{data.email}</p>
//                 </div>
//             })}
            
//         </div >
//     )
// }










// FORMS 
// const App = () => {
//     const [person, setperson] = useState({firstName : "", lastName : "", email : "", age : ""})
//     const [people, setpeople] = useState([])
//     const [enter, setenter] = useState("")

//     const handleChange = (event) => {
//         const {name , value} = event.target
//         const newPerson = {...person, [name] : value}
//         setperson(newPerson)
//     }


//     const handleSubmit = (event) => {
//         event.preventDefault()
//         if(person.firstName && person.lastName && person.email && person.age){
//         let newPeople = {...person, id : new Date().getTime()}
//         console.log(newPeople);
//         setpeople([newPeople])
//         setperson({firstName : "", lastName : "", email : "", age : ""})
//         }else{
//             setenter("Please enter detailes")
//             setTimeout(() => {
//                 setenter("")
//             }, 2000)
//     }
// }

//     return (
//         <div>
//             <form action="">
//             <h1>{enter}</h1>
//                 <div>
//                     <label>FirstName : </label>
//                     <input type="text" 
//                             name="firstName"
//                             value = {person.firstName}
//                             onChange = {handleChange}/>
//                 </div><br />

//                 <div>
//                     <label>LastName : </label>
//                     <input type="text" 
//                             name="lastName"
//                             value = {person.lastName}
//                             onChange = {handleChange}/>
//                 </div><br />

//                 <div>
//                     <label>Email : </label>
//                     <input type="text" 
//                             name="email"
//                             value = {person.email}
//                             onChange = {handleChange}/>
//                 </div><br />

//                 <div>
//                     <label>Age : </label>
//                     <input type="text" 
//                             name="age"
//                             value = {person.age}
//                             onChange = {handleChange}/>
//                 </div>
//             <button onClick = {handleSubmit}>Submit</button>
//             </form><br />


//             {people.map((data) => {
//                 const {firstName, lastName, email, age, id} = data
//                 return <div key = {id}>
//                     <h1>{firstName} {lastName}</h1> 
//                     <p>{email}, {age}</p>
//                 </div>
//             })}

//         </div>
//     )
// }





//FORMS
// const App = () => {
//     const [person, setperson] = useState({
//         name : "",
//         email : "",
//         age : ""
//     })


//     const handleChange = (event) => {
//         const {name, value} = event.target
//         let data = {...person, [name] : value, id: new Date().getTime()}
//         setperson(data)
//     }

//     return(
//         <div>
//             <form>
//                 <div>
//                     <label>Name : </label>
//                     <input type="text" 
//                             name="name"
//                             // value = {array.name}
//                             onChange = {handleChange}/>
//                 </div>

//                 <div>
//                     <label>Email : </label>
//                     <input type="email" 
//                             name="email"
//                             // value = {array.email}
//                             onChange = {handleChange}/>
//                 </div>

//                 <div>
//                     <label>Age : </label>
//                     <input type="text" 
//                             name="age"
//                             // value = {array.age}
//                             onChange = {handleChange}/>
//                 </div>
//             </form>

//             <h1>{person.name}</h1>
//             <h1>{person.email}</h1>
//             <h1>{person.age}</h1>

//         </div>
//     )
// }








//LOG IN LOG OUT BUTTON
// const App = () => {
//     const[islog, setislog] = useState(false)
//     const[logbtn, setlogbtn] = useState(false)

//     const handleClick = () => {
//         setislog(!islog)
//         setlogbtn(!logbtn)
//     }

//     let button
//     if(logbtn){
//         button = "login"
//     }else{
//         button = "logout"
//     } 

//     return (
//         <div>
//             {islog ? <h1>Good Morning, you are logged out, please click here to log in</h1> : <h1>Good Morning, you are logged in, please click here to log out</h1>}
//             <button onClick = {handleClick}>{button}</button>
//         </div>
//     )
// }



// const App = () => {
//     const [value, setvalue] = useState(window.innerWidth)

//     useEffect(() => {
//         window.addEventListener("resize", () => {
//             setvalue(window.innerWidth)
//         })
//     })

//     return (
//         <div>
//             Window Width : {value}px
//         </div>
//     )
// }






// FETCHING 
// const App = () => {
//     const [serverdata, setserverdata] = useState([])
//     const [error, seterror] = useState("")
//     const [istrue, setistrue] = useState(true)
//     const url = "https://api.github.com/users"

//     const getFetch = async() => {
//         const response = await fetch(url)
//         if(response.status >= 200 && response.status < 299){
//             const jsonObject = await response.json()
//             setTimeout(() => { 
//                 setistrue(false)
//                 setserverdata(jsonObject)
//             }, 2000);
//         }else{
//             seterror("error occured")
//         }
//     }

//     useEffect(() => {
//         getFetch()
//     }, [url])

//     return(
//         <div>
//             {istrue ? <h1>Loading...</h1> : serverdata.map((data) => {
//                 const {login, id, avatar_url} = data

//                 return <div key = {id}>
//                     <h1> Name : {login}</h1>
//                 <img src={avatar_url} alt="" />
//                 </div>
//             })}

//             {error}
//         </div>
//     )
// }





//NUMBERS
// const App = () => {
//     const [number, setnumber] = useState(0)

//     return (
//         <div>
//             <h1>Count : {number}</h1><hr />
//             <button onClick = {() => setnumber(number + 1)}>Increase</button><hr />
//             <button onClick = {() => {
//                 if(number > 0){
//                     setnumber(number - 1)}
//                 }
//                }>Decrease</button><hr />
//             <button onClick = {() => setnumber(0)}>Reset</button><hr />
//         </div>
//     )
// }




// OBJECTS 

// const App = () => {
//     const [object, setobject] = useState({
//         firstName : "",
//         LastName : ""
//     })
//     const [people, setpeople] = useState([])

//     const handleClick = () => {
//         let name = {firstName : "Venkateshsdcs", LastName : "Prasad"}
//         setpeople([name])
//     }

//     return(
//         <div>
//             <h1>Click here and enter your age and name to know how old are you</h1>
//             <button onClick = {handleClick}>Click</button>
//         {people.map((data) => {
//             return <div>
//                 {data.firstName}
//             </div>
//         })}
//         </div>
//     )
// }

// export default App






//ARRAY OF OBJECTS

// const App = () => {

//     const [array, setarray] = useState([])



//     const handleClick = () => {
//         const newArray = [
//             { place: "London", at: "England", id: 1 },
//             { place: "Paris", at: "France", id: 2 },
//             { place: "New York", at: "America", id: 3 },
//         ]
//         setarray(newArray)
//     }

//     const remove = (num) => {
//         const myArray = array.filter((data) => data.id !== num)
//         console.log(myArray);
//         setarray(myArray)
//     }

//     const handleChange = (e, num) => {
//         const placeIndex = array.findIndex((data) => data.id === num)

//         const newestArray = [...array]
//         e.target.name === "place" ? newestArray[placeIndex].place = e.target.value : newestArray[placeIndex].at = e.target.value

//         setarray(newestArray)
//     }


//     return (
//         <div>
//             <h1>Click below, and enter your travel destination!</h1>
//             <button onClick={handleClick}>Let's get started</button>
//             {array.map((data) => {
//                 const { place, at, id } = data
//                 return <div key={id}>
//                     <h1>I would like to travel {place}, which is located at {at}</h1>
//                     Travel : <input type="text" name= "place" value = {place} onChange = { (e) => handleChange(e, id)}/><br /><br />
//                     Located At : <input type="text" name= "at" value = {at} onChange = { (e) => handleChange(e, id)}/><br /><br />

//                     <button onClick={() => { remove(id) }}>Remove</button><br /><br />
//                 </div>

//             })}

//             <button onClick={() => setarray([])}>Remove All</button>
//         </div>
//     )
// }

// export default App
