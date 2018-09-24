import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';

import { Header } from './shared/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        I am a react app
      </div>
    );
  }
}

export default App
