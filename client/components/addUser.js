import React, { Component } from 'react';
import { Form } from './form';
import axios from 'axios';
import SelectUSState from 'react-select-us-states';

const defaultState = {
    firstName: "",
    lastName: "",
    DOB: "",
    phone: "",
    address: "",
    states: "",
    zip: ""
};

export class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = defaultState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setNewValue = this.setNewValue.bind(this);

    }
    handleChange (evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    setNewValue(newValue) {
        this.setState({
            states: newValue
        });
        console.log('this is the State code:' + newValue);
    }
    async handleSubmit (evt) {
        evt.preventDefault()
        console.log(this.state)
        const res = await axios.post('/api/users', {firstName: this.state.firstName, lastName: this.state.lastName, DOB: this.state.DOB, phone: this.state.phone, address: this.state.address, state: this.state.states, zip: this.state.zip});
        this.setState({
            firstName: "",
            lastName: "",
            DOB: "",
            phone: "",
            address: "",
            states: "",
            zip: ""
        });
    }
    render () {
        return (
            <div>
                <h3>Please, submit this form: </h3>
                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    setNewValue={this.setNewValue}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    DOB={this.state.DOB}
                    phone={this.state.phone}
                    address={this.state.address}
                    states={this.state.states}
                    zip={this.state.zip}
                />
            </div>
        )}

}