import React, { Component } from 'react';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep'
import ThirdStep from './components/ThirdStep'
import FourthStep from './components/FourthStep'

import Logo from './assets/pictures/Logo.svg'
import './App.css'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

            step: 1,
            email: '',
            phone: '',
            password:'',
            code:'',
            typedCode:''
        };
    }

    generateCod = () => {
        let text = '';
        let possible ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 4; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        this.setState({
            code: text
        })
    }

    nextStep = () => {
        if (this.state.step < 4){
            this.setState({
                step: this.state.step + 1
            })}
    }

    previousStep = () => {
        if (this.state.step > 1)
            this.setState({
                step: this.state.step - 1
            })
    }

    showStep = () => {
        switch (this.state.step) {
            case 1:
                return <FirstStep email={this.state.email}
                                  setField={this.setField}
                                  step={this.state.step}
                                  nextStep={this.nextStep}/>
            case 2:
                return <SecondStep password={this.state.password}
                                   setField={this.setField}
                                   step={this.state.step}
                                   nextStep={this.nextStep}
                                   previousStep={this.previousStep}/>
            case 3:
                return <ThirdStep phone={this.state.phone}
                                  step={this.state.step}
                                  nextStep={this.nextStep}
                                  previousStep={this.previousStep}
                                  setField={this.setField}/>
            case 4:
                return <FourthStep code={this.state.code}
                                   phone={this.state.phone}
                                   previousStep={this.previousStep}
                                   setField={this.setField}
                                   typedCode={this.state.typedCode}
                                   generateCod={this.generateCod}/>
        }
    }

    setField = (key, value) => this.setState({[key]: value})


    render() {
        return (
            <div className='main_div'>
                <span className='logo'><img className='logo-picture' src={Logo}/></span>
                <div className='main_component'>
                    {this.showStep()}
                </div>
            </div>
        );
    }
}