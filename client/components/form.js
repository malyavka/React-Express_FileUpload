import React from 'react';


export const Form = (props) => {

    return (
        <form onSubmit={props.handleSubmit} >
            <hr />
            <label htmlFor="firstName">
                First Name:
            </label>
            <input name="firstName" type="text" value={props.firstName} onChange={props.handleChange} />
            <br />
            <label htmlFor="lastName">
                Last Name:
            </label>
            <input name="lastName" type="text" value={props.lastName} onChange={props.handleChange} />
            <br />
            <label>
                Date of birth:
            </label>
            <input name = "DOB" type="text" value={props.DOB} onChange={props.handleChange} />
            <br />
            <label>
                Phone:
            </label>
            <input name="phone" type="text" value={props.phone} onChange={props.handleChange} />
            <br />
            <label>
                Address:
            </label>
            <input name="address" type="text" value={props.address} onChange={props.handleChange} />
            <br />
            <label>
                State:
            </label>
            <input name="states" type="text" value={props.states} onChange={props.handleChange} />
            <br />
            <label>
                Zip code:
            </label>
            <input name="zip" type="text" value={props.zip} onChange={props.handleChange} />
            <br />
            <button type="submit" disabled={!props.firstName || !props.lastName}>Submit</button>

        </form>
    )
};

export default Form;