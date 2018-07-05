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
            <span className='form_component-str'>Verify Your Account</span>
            <span className='form_component-str'>Almost here! Enter your phone number and we<br/>will send you verification code</span>
            <MaskedInput
                mask={['8',' ','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                className="input"
                placeholder="Enter a phone number"
                guide={false}
                id="my-input-id"
                onChange={ e => this.props.setField('phone', e.target.value) }
            />
            <div className='btn-block'>
                <button className=" btn title-module__link" onClick={this.props.previousStep}>BACK</button>
                {
                    (this.props.phone.length >= 16) ?
                        <button className="btn title-module__btn" onClick={this.props.nextStep}>NEXT</button> :
                        <button className="btn btn-inactive" >NEXT</button>
                }
            </div>
        </div>
    }
}