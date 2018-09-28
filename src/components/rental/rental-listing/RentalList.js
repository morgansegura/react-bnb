import React, { Component } from 'react';
import RentalCard from './RentalCard';
//import * as actions from 'actions'

class RentalList extends Component {

    renderRentals() {
        return this.props.rentals.map((rental, i) => (
            <RentalCard key={i} classes="card" rental={rental} />
        )) 
    }

   render() {
        return (
            <div className="row">
                {this.renderRentals()}
            </div>
        )
   }
}

export default RentalList