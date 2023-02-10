//rafce
import React, {useState} from 'react'

const darkMode = {
    backgroundColor: "black",
    color: "white",
}
const lightMode = {
    backgroundColor: "white",
    color: "black",
}

const Form = () => {
    //State variables
    //Getters & Setters
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [age, setAge] = useState("")
    const [img, setImg] = useState("")

    const [light, setLight] = useState(true)
    const switchLight = () => setLight(!light)

    const [listOfPets, setListOfPets] = useState([])


    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Form submitted", name, type, age, img )

        let petObj = {name, type, age, img}

        setListOfPets([...listOfPets, petObj])
    }

    const deletePet = (e, idx) => {
        console.log("Deleting pet: ", idx)

        let copy = listOfPets.filter((pet, i) => {
            console.log(`${pet} ${idx} will be removed from our list of pets`)
            return i !==idx
        })
        setListOfPets(copy)
    }

    return (
        <div>
            <h1>Pet Form</h1>
            <form onSubmit={submitHandler} className="form">
                <div>
                <label>Pet Name:</label>
                <input type="text" onChange={(e) => {setName(e.target.value)}} className="form-control"/>
                {
                    name.length < 3 && name.length > 0  ? <p className='text-danger'>Must fill out a name & be 3 characters long</p> : null
                }
                </div>
                <div>
                <label>Pet Type:</label>
                <input type="text" onChange={(e) => {setType(e.target.value)}} className="form-control"/>
                                {
                    type.length < 3 && type.length > 0  ? <p className='text-danger'>Must fill out a name & be 3 characters long</p> : null
                }
                </div>
                <div>
                <label>Pet Age:</label>
                <input type="text" onChange={(e) => {setAge(e.target.value)}} className="form-control"/>
                {/* {
                    age.length < 3 && age.length > 0  ? <p className='text-danger'>Must fill out a name & be 3 characters long</p> : null
                } */}
                </div>
                <div>
                <label>Pet Image:</label>
                <input type="text" onChange={(e) => {setImg(e.target.value)}} className="form-control"/>
                </div>
                <div>
                    <button type="submit" className='btn btn-outline-dark'>Add Pet</button>
                </div>
            </form>
            <div className='pet-list' style={light ? lightMode : darkMode}>
                <button onClick={switchLight} className="btn btn-warning">{light ? "Dark Mode" : "Light Mode"}</button>
                {
                    listOfPets.map((pet, idx) => {
                        return(
                            <div key={idx} >
                                <h2>This is my unique key: {idx}</h2>
                                <h1>{pet.name}</h1>
                                <h3>{pet.type}</h3>
                                <h4>{pet.age}</h4>
                                <img src={pet.img} alt="Pet Pic" height="150px"/>
                                <br />
                                <button onClick={(e) => deletePet(e, idx)} className="btn btn-outline-danger">Delete</button>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Form