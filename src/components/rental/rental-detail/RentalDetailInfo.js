import React from 'react';
import { rentalType } from 'helpers';
import RentalAssets from './RentalAssets'

const RentalDetailInfo = (props) => {
    const rental = props.rental
    return (
        <div className="rental">
            <div className="rental__detail">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p className="category"><span className={rental.category}>{rentalType(rental.shared)} {rental.category}</span></p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="category">Booking</p>
                    </div>
                </div>

                <h1 className="title">{rental.title}</h1>
                <h2 className="city">{rental.city}</h2>
                
                <p className="rooms">
                    <span><i className="fas fa-hotel"></i> {rental.bedrooms} bedrooms </span>
                    <span> <i className="fas fa-user"></i> 8 guests </span>
                    <span> <i className="fas fa-bed"></i>  6 beds </span>
                </p>
                <p className="description">
                    {rental.description}
                </p>
            </div>
            <RentalAssets />        
        </div>
    );
};

export default RentalDetailInfo;