import React, { Component } from 'react';
import { connect } from 'react-redux';
import RentalDetailInfo from './RentalDetailInfo'
import RentalMap from './RentalMap'
import Booking from 'components/booking/Booking';

import * as actions from 'actions'

class RentalDetail extends Component {
    
    componentWillMount() {
        // Dispatch action
        const rentalId = this.props.match.params.id;

        this.props.dispatch(actions.fetchRentalById(rentalId));
    }

    render() {
        const rental = this.props.rental

        if (rental._id) {
            return (
                <section className="rental__detail">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="rental__detail__image">
                                <img src={rental.image} alt={rental.title} />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <RentalMap location={`${rental.city}, ${rental.street}`} />
                        </div>
                    </div>
                    <div className="details-section">
                        <div className="row">
                            <div className="col-md-8">
                                <RentalDetailInfo rental={rental} />
                            </div>
                            <div className="col-md-4">
                                <Booking rental={rental} />
                            </div>
                        </div>
                    </div>

                </section>
            )
        } else {
            return (
                <h1>Loading...</h1>
            )
        }
    }
}

const mapStateToProps = (state) => {
    //console.log(state.rental.data);
    return {
        rental: state.rental.data,
        errors: state.rental.errors
    }
}

export default connect(mapStateToProps)(RentalDetail)