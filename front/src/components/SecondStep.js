import React, { Component } from 'react';

export default class SecondStep extends Component {
    constructor(props){
        super(props);
        this.state = {
            test: ''
        }

    }
    render(){
        return <div className='form_component'>
            <span className='form_component-str caption'>Enter Password</span>
            <span className='form_component-str'>Once you create a password you can acceses<br/>your account</span>
            <input className="input pw_input"
                   type="password"
                   placeholder="Password"
                   value={ this.props.password }
                   onChange={ e => this.props.setField('password', e.target.value) }
            />
            {
                (this.props.password.length < 6 && this.props.password !=='') ?
                    <span className="error_message" >Password is incorrect.</span> :
                    <span className="error_message" ></span>
            }
            <div className='btn-block'>
                        <button className=" btn" onClick={this.props.previousStep}>BACK</button>
                {
                    (this.props.password.length >= 6) ?
                        <button className="btn" onClick={this.props.nextStep}>NEXT</button> :
                        <button className="btn btn-inactive" >NEXT</button>
                }
            </div>
        </div>
    }
}
