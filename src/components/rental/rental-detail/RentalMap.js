import React, { Component } from 'react'
import { MapWithGeocode } from 'components/map/GoogleMap'

class RentalMap extends Component {
    render() {
        const location = this.props.location
        return (
            <MapWithGeocode
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBz0dHx_sM6WQ_nyCOuhxCAb8jK5HFVhL4&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div className="google-map" style={{ height: `96%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                location={location}
            />
        )
    }
}

export default RentalMap