import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FormInputGroup from './FormComp/FormInputGroup';
import FormSelectComp from './FormComp/FormSelectComp';
import validateFormInput from './Utilities/Validation';
import TextAreaProfile from "./FormComp/TextAreaProfile";

class FinerVision extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            Email: '',
            TelNumber: '',
            Gender: '',
            Values: [
                'Male',
                'Female'
            ],
            DoB: '',
            Comments: '',
            errors: []
        }

        this.valueChange = this.valueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    valueChange(e){
        const {name, value} = e.target;
        // Initialise previous data to this data
        this.setState({[name]: value});
    };

    onSubmit(e){
        e.preventDefault();
        const {firstName, lastName, Email, TelNumber, Gender, DoB, Comments} = this.state;

        let data = {
            firstName: firstName,
            lastName: lastName,
            Email: Email,
            TelNumber: TelNumber,
            Gender: Gender,
            DoB: DoB,
            Comments: Comments,
        };

        let checkData = validateFormInput(data);

        if (!checkData.isValid) {
            this.setState({
                errors: checkData.errors
            });
        }
        else {
            this.setState({errors: {}});

            axios.post('/', data)
                .then(response => {
                    //console.log(response);
                })
                .catch(err => {
                    //console.log(err);
                })
        }
    };

    render() {

        const {firstName, lastName, Email, TelNumber, DoB, Comments, errors, Values} = this.state;

        return (
            <div id="accordion" className="container-1">
                <form autoComplete="off" onSubmit={this.onSubmit}>

                    <a id="toggle" href="#section-1-hide" className="collapse show" data-toggle="collapse"
                       data-target="#section-1-hide"
                       aria-expanded="false" aria-controls="section-1-hide">
                        <div id="section-1" className="sections">
                            <h4>Step 1: Your details</h4>
                        </div>
                    </a>
                    <div id="section-1-hide" className="collapse show" aria-labelledby="section-1" data-parent="#accordion">
                        <div id="card1" className="inner-container-1">
                            <div className="row-1">
                                <div className="inline">
                                    <label>
                                        First Name
                                    </label>
                                    <FormInputGroup
                                        myClassName="inputFields"
                                        name="firstName"
                                        value={firstName}
                                        type="text"
                                        onChange={this.valueChange}
                                        error={errors.firstName}
                                    />
                                </div>
                                <div className="inline">
                                    <label>
                                        Surname
                                    </label>
                                    <FormInputGroup
                                        myClassName="inputFields"
                                        name="lastName"
                                        value={lastName}
                                        type="text"
                                        onChange={this.valueChange}
                                        error={errors.lastName}
                                    />

                                </div>
                            </div>
                            <div className="row-1">
                                <div className="inline">
                                    <label>
                                        Email Address:
                                    </label>
                                    <FormInputGroup
                                        myClassName="inputFields"
                                        name="Email"
                                        value={Email}
                                        type="text"
                                        onChange={this.valueChange}
                                        error={errors.Email}
                                    />
                                </div>
                            </div>
                            <div className="row-1 button">
                                <button type="button"
                                        data-toggle="collapse" data-target="#section-2-hide"
                                        aria-expanded="true" aria-controls="section-2-hide"
                                >
                                    Next >
                                </button>
                            </div>
                        </div>
                    </div>


                    <a id="toggle" href="#section-2-hide" className="collapsed" data-toggle="collapse"
                       data-target="#section-2-hide"
                       aria-expanded="false" aria-controls="section-1-hide">
                        <div id="section-1" className="sections">
                            <h4>Step 2: More comments</h4>
                        </div>
                    </a>
                    <div id="section-2-hide" className="collapse" aria-labelledby="section-2" data-parent="#accordion">
                        <div id="card1" className="inner-container-1">
                            <div className="row-1">
                                <div className="inline">
                                    <label>
                                        Telephone number
                                    </label>
                                    <FormInputGroup
                                        myClassName="inputFields"
                                        name="TelNumber"
                                        value={TelNumber}
                                        type="text"
                                        onChange={this.valueChange}
                                        error={errors.TelNumber}
                                    />
                                </div>
                                <div className="inline">
                                    <label>
                                        Gender
                                    </label>
                                    <FormSelectComp
                                        myClassName="inputFields"
                                        name="Gender"
                                        id="Gender"
                                        values={Values}
                                        onChange={this.valueChange}
                                        error={errors.Gender}
                                    />
                                </div>
                            </div>
                            <div className="row-1">
                                <label>
                                    Date of birth
                                </label>
                                <FormInputGroup
                                    myClassName="inputFields"
                                    name="DoB"
                                    value={DoB}
                                    type="date"
                                    onChange={this.valueChange}
                                    error={errors.DoB}
                                />
                            </div>
                            <div className="row-1 button">
                                <button type="button"
                                        data-toggle="collapse" data-target="#section-3-hide"
                                        aria-expanded="true" aria-controls="section-3-hide">
                                    Next >
                                </button>
                            </div>
                        </div>
                    </div>


                    <a id="toggle" href="#section-3-hide" className="collapsed" data-toggle="collapse"
                       data-target="#section-3-hide"
                       aria-expanded="false" aria-controls="section-1-hide">
                        <div id="section-1" className="sections">
                            <h4>Step 3: Final comments</h4>
                        </div>
                    </a>
                    <div id="section-3-hide" className="collapse" aria-labelledby="section-3" data-parent="#accordion">
                        <div id="card1" className="inner-container-1">
                            <div className="row-1">
                                <div className="row-1" id="last-section">
                                    <label>
                                        Comments
                                    </label>
                                    <TextAreaProfile
                                        myClassName="inputFields"
                                        name="Comments"
                                        value={Comments}
                                        type="textarea"
                                        rows="6"
                                        cols="35"
                                        onChange={this.valueChange}
                                        error={errors.Comments}
                                    />
                                </div>
                                <button type="submit">Next ></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default FinerVision;

if (document.getElementById('vision')) {
    ReactDOM.render(<FinerVision />, document.getElementById('vision'));
}
