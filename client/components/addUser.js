import React, { Component } from 'react';
import { Form } from './form';

const defaultState = {
    firstName: "",
    lastName: "",
    DOB: "",
    phone: "",
    address: "",
    state: "",
    zip: ""
};

export class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = defaultState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit (evt) {
        evt.preventDefault()
        this.props.add(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            DOB: "",
            phone: "",
            address: "",
            state: "",
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
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    DOB={this.state.DOB}
                    phone={this.state.phone}
                    address={this.state.address}
                    state={this.state.state}
                    zip={this.state.zip}
                />
            </div>
        )}

}