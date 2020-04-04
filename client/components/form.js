import React from 'react';
import SelectUSState from 'react-select-us-states';
import FileUpload from "./fileUpload";


export const Form = (props) => {
    return (
        <div className="container">
            <form className='form' onSubmit={props.handleSubmit} >
                <hr />
                <label htmlFor="firstName">
                    First Name:
                </label>
                <input className='form input'
                    name="firstName"
                    type="text"
                    required
                    value={props.firstName}
                    onChange={props.handleChange} />
                <br />
                <label htmlFor="lastName">
                    Last Name:
                </label>
                <input
                    name="lastName"
                    type="text"
                    required
                    value={props.lastName}
                    onChange={props.handleChange} />
                <br />
                <label>
                    Date of birth:
                </label>
                <input
                    name = "DOB"
                    type="date"
                    required
                    value={props.DOB}
                    onChange={props.handleChange} />
                <br />
                <label>
                    Phone:
                </label>
                <input
                    name="phone"
                    type="text"
                    required
                    value={props.phone}
                    onChange={props.handleChange} />
                <br />
                <label>
                    Address:
                </label>
                <input
                    name="address"
                    type="address"
                    required
                    value={props.address}
                    onChange={props.handleChange} />
                <br />
                <label>
                    State:
                </label>

                <SelectUSState
                    required
                    onChange={props.setNewValue}/>
                <br />
                <label>
                    Zip code:
                </label>
                <input
                    name="zip"
                    type="zip"
                    required
                    value={props.zip}
                    onChange={props.handleChange} />
                <br />
                <FileUpload/>
                <br/>
                <button
                    type="submit"
                    // disabled={!props.states}
                >
                    Submit
                </button>
            </form>
        </div>
    )
};