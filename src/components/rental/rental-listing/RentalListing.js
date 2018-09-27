import React, { Component } from 'react';
import { connect } from 'react-redux';

import RentalList from './RentalList';
import * as actions from '../../../actions'

class RentalListing extends Component {

    componentWillMount() {
        this.props.dispatch(actions.fetchRentals())
    }

    addRental() {
        const rentals = this.state.rentals
 
        rentals.push(1)

        this.setState({
            rentals
        })
    }

   render() {
        return (
            <div className="rental__listing">
                <h1 className="content__title">Your Home All Around the World</h1>
                <RentalList rentals={this.props.rentals} />
                <button className="btn btn--sm btn--cta" onClick={() => {this.addRental()}}>
                    Add Rental
                </button>    
            </div>     
        )
   }
}

const mapStateToProps = (state) => {

    return {
        rentals: state.rentals.data
    }
}

export default connect(mapStateToProps)(RentalListing)