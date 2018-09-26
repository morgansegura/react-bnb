import React from 'react';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const ItemCard = (props) => {

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className={props.classes}>
                <CardActionArea className="card__body">
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
                        <Button size="small" color="primary">
                            More Info
                        </Button>
                    </div>                    
                </CardActionArea>
            </div>
        </div>            
    );
};

export default ItemCard