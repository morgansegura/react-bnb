import React, { Component } from 'react';
import { Cacher } from 'services/cacher'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Circle,
    InfoWindow
} from "react-google-maps";

const MapComponent = (props) => {
    const { coordinates, isError, isLocationLoaded } = props

    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={coordinates}
            center={coordinates}
            options={{disableDefaultUI: isError ? true : false}}
        >
            { isLocationLoaded && !isError && <Circle center={coordinates} radius={500} /> }
            { isLocationLoaded && isError && 
                <InfoWindow position={coordinates} options={{ maxWidth: 300 }}>
                    <div className="info-window">
                        <div className="info-window__inner">
                            <p className="info-window__error">
                                <span><i className="fas fa-exclamation-circle"></i></span> We had an issue finding this location on the map. 
                                We are trying to resolve the issue as quickly as possible. 
                            </p>
                            <p className="info-window__contact">
                                Contact the host for additional information if you are still
                                ineterested in booking this rental.
                            </p>                        
                            <p className="info-window__apology">
                                We apologize for any inconvenience.
                            </p>                    
                        </div>
                    </div>
                </InfoWindow> 
            }

        </GoogleMap>              
    )
}

const withGeocode = (WrappedComponent) => {
    return class extends Component {
        
        cacher = new Cacher()

        state = {
            coordinates: {
                lat: 0,
                lng: 0,
                isError: false,
                isLocationLoaded: false
            }
        }

        componentWillMount() {
            this.getGeocodedLocation()
        }

        updateCoordinates(coordinates) {
            this.setState({
                coordinates,
                isLocationLoaded: true
            })
        }

        geocodeLocation(location) {
            const geocoder = new window.google.maps.Geocoder()

            return new Promise((resolve, reject) => {
                geocoder.geocode({ address: location }, (result, status) => {
                    if (status === 'OK') {
                        const geometry = result[0].geometry.location
                        const coordinates = { lat: geometry.lat(), lng: geometry.lng() }

                        this.cacher.cacheValue(location, coordinates)

                        resolve(coordinates)
                    } else {
                        reject('Google Map error!')
                    }
                })
            })
        }

        getGeocodedLocation() {
            const location = this.props.location

            if (this.cacher.isValueCached(location)) {
                this.updateCoordinates(this.cacher.getCachedValue(location))
            } else {
                this.geocodeLocation(location).then(
                (coordinates) => {
                    this.updateCoordinates(coordinates)
                }, 
                (error) => {
                    this.setState({ isLocationLoaded: true, isError: true })
                })
            }
        }

        render() {
            return (
                <WrappedComponent {...this.state} />
            )
        }
    }
}

export const MapWithGeocode = withScriptjs(withGoogleMap(withGeocode(MapComponent)))