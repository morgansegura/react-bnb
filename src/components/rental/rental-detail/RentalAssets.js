import React from 'react';

const RentalAssets = (props) => {
    //const rental = props.rental
    return (
        <div className="list__assets">
            <h3 className="section-title">Ammenities</h3>
            <div className="row">
                <div className="col-6">
                    <p className="list__assets__item"><i className="fa fa-snowflake"></i> Cooling</p>
                    <p className="list__assets__item"><i className="fa fa-thermometer-three-quarters"></i> Heating</p>
                    <p className="list__assets__item"><i className="fa fa-hotel"></i> Iron</p>
                </div>
                <div className="col-6">
                    <p className="list__assets__item"><i className="fa fa-tshirt"></i> Working area</p>
                    <p className="list__assets__item"><i className="fa fa-hotel"></i> Washing Machine</p>
                    <p className="list__assets__item"><i className="fa fa-utensils"></i> Dishwasher</p>
                </div>  
            </div>
        </div>
    );
};

export default RentalAssets;