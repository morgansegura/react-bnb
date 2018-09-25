import React, { Component } from 'react'

// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';

import { Header } from './components/shared/Header'
import Footer from './components/shared/Footer'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <main className="main__content">
          
        </main>
        <Footer />
      </div>
    );
  }
}

export default App
