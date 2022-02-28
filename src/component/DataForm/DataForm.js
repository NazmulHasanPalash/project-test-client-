import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './DataForm.css';

const DataForm = () => {




    const history = useHistory();

    const FirstNameRef = useRef();
    const LastNameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();

    const handleAddUser = e => {
        const FirstName = FirstNameRef.current.value;
        const LastName = LastNameRef.current.value;
        const email = emailRef.current.value;

        const age = ageRef.current.value;
        const gender = genderRef.current.value;


        const newUser = { FirstName, LastName, email, age, gender };

        fetch('https://calm-sands-77989.herokuapp.com/data', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    e.target.reset();
                    history.push(`/home`);

                }
            })
        e.preventDefault();
    }
    return (
        <div onSubmit={handleAddUser}>
            <form className="appointment-form w-75 mx-auto my-5 text-center" >

                <input className="mx-auto" type="text" placeholder="First Name" ref={FirstNameRef} />
                <input className="mx-auto" type="text" placeholder="Last Name" ref={LastNameRef} />
                <input className="mx-auto" type="email" placeholder="Email" ref={emailRef} />
                <input className="mx-auto" type="number" placeholder="Age" ref={ageRef} />

                <select className="form-select w-50 mx-auto my-5" aria-label="Default select example" ref={genderRef}>
                    <option selected>Open this select menu</option>
                    <option value="Male" >Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>

                <Link></Link>
                <input className="mx-auto btn-primary" type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default DataForm;