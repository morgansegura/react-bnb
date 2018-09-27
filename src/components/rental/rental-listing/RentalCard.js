import React from 'react';
import { Link } from 'react-router-dom';

import CardMedia from '@material-ui/core/CardMedia';

const RentalCard = (props) => {

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <Link to={`/rentals/${props.rental.id}`}>
                <div className={props.classes}>
                    <div className="card__body">
                        <CardMedia
                            component="img"
                            image={props.rental.image}
                            title={props.rental.title}
                        />
                        <div className="buffer__inner">
                            <p className="category">
                                <span className={props.rental.category}>{props.rental.shared ? 'shared' : 'whole'} {props.rental.category} &#183; {props.rental.city}</span>
                            </p>
                            <h3>{props.rental.title}</h3>
                            <p>
                                ${props.rental.dailyRate} per night &#183; Free Cancellation
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