import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions'

class RentalDetail extends Component {
    
    componentWillMount() {

        const rentalId = this.props.match.params.id
        this.props.dispatch(actions.fetchRentalById(rentalId))
    }

    render() {
        const rental = this.props.rental

        if (rental.id) {
            return (
                <div className="rental-list">
                    <h1 className="content__title">
                        This is the item with an id of [{this.props.match.params.id}]
                    </h1>
                    <div>
                        <p>image: </p>
                        <img className="buffer__inner--b" src={rental.image} alt={rental.title} />
                        <p>id: {rental.id}</p>
                        <p>title: {rental.title}</p>
                        <p>category: {rental.category}</p>                        
                        <p>bedrooms: {rental.bedrooms}</p>
                        <p>street: {rental.street}</p>                        
                        <p>city: {rental.city}</p>
                        <p>createdAt: {rental.createdAt}</p>
                        <p>dailyRate: {rental.dailyRate}</p>
                        <p>description: {rental.description}</p>
                        <p>shared: {rental.shared ? 'true' : 'false'}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <h1>Loading...</h1>
            )
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state.rental.data);
    return {
        rental: state.rental.data
    }
}

export default connect(mapStateToProps)(RentalDetail)