import React, { Component } from 'react';
import { connect } from 'react-redux';
import RentalDetailInfo from './RentalDetailInfo'
import RentalMap from './RentalMap'

import * as actions from 'actions'

class RentalDetail extends Component {
    
    componentWillMount() {

        const rentalId = this.props.match.params.id
        this.props.dispatch(actions.fetchRentalById(rentalId))
    }

    render() {
        const rental = this.props.rental

        if (rental._id) {
            return (
                <div className="rental__detail">
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

                    <RentalDetailInfo rental={rental} />

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
    //console.log(state.rental.data);
    return {
        rental: state.rental.data
    }
}

export default connect(mapStateToProps)(RentalDetail)