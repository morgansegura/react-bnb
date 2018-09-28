import React from 'react';
import { Link } from 'react-router-dom';
import { rentalType } from 'helpers'

import CardMedia from '@material-ui/core/CardMedia';

const RentalCard = (props) => {
    const rental = props.rental

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <Link to={`/rentals/${rental._id}`}>
                <div className={props.classes}>
                    <div className="card__body">
                        <CardMedia
                            component="img"
                            image={rental.image}
                            title={rental.title}
                        />
                        <div className="buffer__inner">
                            <p className="category">
                                <span className={rental.category}>{rentalType(rental.shared)} {rental.category} &#183; {rental.city}</span>
                            </p>
                            <h3>{rental.title}</h3>
                            <p>
                                ${rental.dailyRate} per night &#183; Free Cancellation
                            </p>
                        </div>
                        <div className="card__footer">
                            <button className="btn btn--sm btn--more">
                                More Info
                            </button>
                        </div>                    
                    </div>
                </div>                     
            </Link>
        </div>            
    );
};

export default RentalCard