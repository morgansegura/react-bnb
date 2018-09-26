import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/styles.css'

import { Header } from './components/shared/Header'
import Footer from './components/shared/Footer'
import Rentals from './components/rentals'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <main className="container">
          <h1 className="content__title">Your Home All Around the World</h1>
          <Rentals />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
