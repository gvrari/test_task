import React, { Component } from 'react';

export default class FourthStep extends Component {
    constructor(props){
        super(props);
        this.state = {
            typedCode:''
        }

    }
    render(){
        return <div className='form_component'>
            <span className='form_component-str caption'>Enter Verification Code</span>
            <span className='form_component-str'>We have texted you code to your phone<br/>{this.props.phone}</span>
            <span className='form_component-str'>Your Code: {this.props.code}</span>
            <input className="input"
                   type="text"
                   placeholder='Enter your code'
                   value={ this.props.typedCode }
                   onChange={ e => this.props.setField('typedCode', e.target.value) }
            />
            {
                (this.props.typedCode !== this.props.code && this.props.typedCode.length === 4) ?
                    <span className="error_message" >Code is invalid.</span> :
                    <span className="error_message" ></span>
            }
            <div className='btn-block'>
            <button className="btn " onClick={this.props.generateCod}>Get the Code</button>
                {
                    (this.props.typedCode === this.props.code && this.props.typedCode !=='') ?
                        <button className="btn " >DONE</button> :
                        <button className="btn btn-inactive" >DONE</button>
                }
            </div>
        </div>
    }
}