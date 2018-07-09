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
            typedCode:'',
            emailError: false,
        };
    }

    createUserInfo = (data) => {
       this.state.data ={
           email: this.state.email,
           password: this.state.password,
           phone: this.state.phone
        };
        data = {data: this.state.data}
        fetch('http://localhost:3001/user', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => alert('Done'))
    }

    createUserCode = (phone) => {
        phone = {phone: this.state.phone};

        fetch('http://localhost:3001/code', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(phone)
        }).then(res => res.json())
            .then(res => {
                this.setState({code: res.code});
                alert(res.code)
            })
    }

    emailChecking = (email) => {
        email = {email: this.state.email};

        fetch('http://localhost:3001/email', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(email)
        }).then(res => res.json())
            .then(res => {if (res.result  === true) {
            this.setState({
                emailError:  false
            });
            this.nextStep()
        } else {
            this.setState({
                emailError:  true
            })
        }})

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
                                  emailChecking ={this.emailChecking}
                                  emailError={this.state.emailError}
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
                                   createUserCode={this.createUserCode}
                                   createUserInfo={this.createUserInfo}/>
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