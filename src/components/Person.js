import axios from "axios";
import { useState } from "react";

function Person () {
    const [ name, setName ] = useState( "zaid" );
    const [ age, setAge ] = useState( 24 );
    const [ gender, setGender ] = useState( "male" );
    function handleSubmit ( event ) {
        event.preventDefault();
        setName( event.target.newName.value );
        setGender( event.target.gender.value );
        let age = event.target.age.value;
        let gender = event.target.gender.value;
        axios.post( `${process.env.REACT_APP_SERVER}/person?name=${name}&age=${age}&gender=${gender}` )
            .then( response => {
                setAge( response.data );
            } )
            .catch( error => {
                console.log( error );
            } );
    }
    return (
        <>
        <div>
            <h2>Person</h2>
            <p data-testid='name'>My name is {name}</p>
            <p data-testid='age'>My age is {age}</p>
            <p data-testid='gender'>My gender is {gender}</p>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="newName" />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" name="age" />
                </label>
                <br />
                <label>
                    Gender:
                    <select name="gender">
                        <option value="select">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
        </>
    );
}


export default Person;