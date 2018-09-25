import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'material-responsive-grid/material-responsive-grid.css'
import './assets/css/styles.css'

import { Header } from './components/shared/Header'
import Footer from './components/shared/Footer'
import ItemCard from './components/ui/ItemCard'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <main className="main__content grid">
          <ItemCard />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
