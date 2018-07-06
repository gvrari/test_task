import React, { Component } from 'react';

export default class FirstStep extends Component {
    constructor(props){
        super(props);
        this.state = {
            test: ''
        }

    }
    render(){
        return <div className='form_component'>
            <span className='form_component-str caption'>Let`s start</span>
            <span className='form_component-str'>Enter your email adress to sign up</span>
            <input className="input email_input"
                   type="text"
                   placeholder="mail@example.com"
                   value={ this.props.email }
                   onChange={ e => this.props.setField('email', e.target.value) }
            />
            {
                (this.props.email !== 'test@test.com' && this.props.email !=='') ?
                    <span className="error_message" >Email is incorrect.</span> :
                    <span className="error_message" ></span>
            }
            <div className='first_step-btn-block'>
                {
                    (this.props.email === 'test@test.com') ?
                        <button className="btn" onClick={this.props.nextStep}>NEXT</button> :
                        <button className="btn btn-inactive" >NEXT</button>
                }
            </div>
        </div>
    }
}