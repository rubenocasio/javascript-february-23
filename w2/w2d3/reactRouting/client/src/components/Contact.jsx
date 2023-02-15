import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
    
const Contact = (props) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const navigate = useNavigate();
        
    const sendSurvey = (e) => {
        e.preventDefault();
        console.log(name, ' ', comment)
        navigate(`/about/${name}/${comment}`);
    }
        
    return (
        <form onSubmit={ sendSurvey }>
        <label>Your Name:</label>
        <br />
        <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
        <br />
        <label>Your Comment:</label>
        <br />
        <input type="number" onChange={ (e) => setComment(e.target.value) } value={ comment }></input>
        <br />
        <input type="submit" value="Submit Survey" />
        </form>
    );
}

export default Contact;