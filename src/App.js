import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'


import RentalList from 'components/rental/rental-listing/RentalListing'
import RentalDetail from 'components/rental/rental-detail/RentalDetail'

import { Header } from 'components/shared/Header'
import Footer from 'components/shared/Footer'

const store = require('reducers').init()

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
            <div className="wrapper">
              <Header />
              <main className="content container">
                  <Route exact path="/" render={() => { return <Redirect to='/rentals' />}} />
                  <Route exact path="/rentals" component={RentalList} />
                  <Route exact path="/rentals/:id" component={RentalDetail} />
              </main>
              <Footer />
            </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
