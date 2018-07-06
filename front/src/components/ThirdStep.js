import React, { Component } from 'react';
import MaskedInput from 'react-text-mask'

export default class ThirdStep extends Component {
    constructor(props){
        super(props);
        this.state = {
            test: ''
        }

    }

    render(){
        return <div className='form_component'>
            <span className='form_component-str caption'>Verify Your Account</span>
            <span className='form_component-str'>Almost here! Enter your phone number and we<br/>will send you verification code</span>
            <MaskedInput
                mask={['8',' ','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                className="input"
                placeholder="Enter a phone number"
                guide={false}
                id="my-input-id"
                onChange={ e => this.props.setField('phone', e.target.value) }
            />
            {
                (this.props.phone.length < 16 && this.props.phone !=='') ?
                    <span className="error_message" >Phone is invalid.</span> :
                    <span className="error_message" ></span>
            }
            <div className='btn-block'>
                <button className=" btn " onClick={this.props.previousStep}>BACK</button>
                {
                    (this.props.phone.length >= 16) ?
                        <button className="btn" onClick={this.props.nextStep}>NEXT</button> :
                        <button className="btn btn-inactive" >NEXT</button>
                }
            </div>
        </div>
    }
}