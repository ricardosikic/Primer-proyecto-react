import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



export class Contador extends React.Component {

  constructor(props) {
    super(props);
    this.state = { conta: 0 };
  }

  componentDidMount() {
    this.contaID = setInterval(() => this.aumento(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.contaID);
  }

  componentDidUpdate() {
    if(this.state.conta > 3004) {
       clearInterval(this.contaID);
    }
  }

  aumento() {
    this.setState({
      conta: this.state.conta + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Como Avanza el Contador</h1>
        <h3>{Math.floor((this.state.conta / 1000) % 10)}</h3>
        <h3>{Math.floor(this.state.conta / 100) % 10}</h3>
        <h3>{Math.floor(this.state.conta / 10) % 10}</h3>
        <h3>{Math.floor(this.state.conta / 1) % 10}</h3>
      </div>
    );
  }
}