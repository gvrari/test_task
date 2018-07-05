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
            <span className='form_component-str'>Enter Password</span>
            <span className='form_component-str'>Once you create a password you can acceses<br/>your account</span>
            <input className="input email_input"
                   type="password"
                   placeholder="Password"
                   value={ this.props.password }
                   onChange={ e => this.props.setField('password', e.target.value) }
            />
            <div className='btn-block'>
                        <button className=" btn title-module__link" onClick={this.props.previousStep}>BACK</button>
                {
                    (this.props.password.length >= 6) ?
                        <button className="btn title-module__btn" onClick={this.props.nextStep}>NEXT</button> :
                        <button className="btn btn-inactive" >NEXT</button>
                }
            </div>
        </div>
    }
}
