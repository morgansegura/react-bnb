import React from 'react';

import CardMedia from '@material-ui/core/CardMedia';


const ItemCard = (props) => {

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className={props.classes}>
                <div className="card__body">
                    <CardMedia
                        component="img"
                        image={props.image}
                        title={props.title}
                    />
                    <div className="buffer__inner">
                        <span className="card__body--green">{props.category} - {props.city}</span>
                        <h3>{props.description}</h3>
                        <p>
                            ${props.dailyRate} per night - Free Cancellation
                        </p>
                    </div>
                    <div className="card__footer">
                        <a href="/" className="btn btn--sm btn--more">
                            More Info
                        </a>
                    </div>                    
                </div>
            </div>
        </div>            
    );
};

export default ItemCard