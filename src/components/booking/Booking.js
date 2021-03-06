import React, { Component } from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import { BookingModal } from './BookingModal'
import { getRangeOfDates } from 'helpers'
import { ToastContainer, toast } from 'react-toastify'


import * as moment from 'moment'
import * as actions from 'actions'

class Booking extends Component {

    constructor() {
        super();

        this.bookedOutDates = [];
        this.dateRef = React.createRef();

        this.state = {
            proposedBooking: {
                startAt: '',
                endAt: '',
                guests: ''
            },
            modal: {
                open: false
            },
            errors: []
        }

        this.checkInvalidDates = this.checkInvalidDates.bind(this);
        this.handleApply = this.handleApply.bind(this);
        this.cancelConfirmation = this.cancelConfirmation.bind(this);
        this.reserveRental = this.reserveRental.bind(this);
    }

    componentWillMount() {
        this.getBookedOutDates();
    }

    getBookedOutDates() {
        const { bookings } = this.props.rental;

        if (bookings && bookings.length > 0) {
            bookings.forEach(booking => {
                const dateRange = getRangeOfDates(booking.startAt, booking.endAt, 'DD/MM/Y');
                this.bookedOutDates.push(...dateRange);
            });
        }
    }

    checkInvalidDates(date) {
        return this.bookedOutDates.includes(date.format('DD/MM/Y')) || date.diff(moment(), 'days') < 0;
    }

    handleApply(event, picker) {
        const startAt = picker.startDate.format('DD/MM/Y');
        const endAt = picker.endDate.format('DD/MM/Y');

        this.dateRef.current.value = startAt + ' to ' + endAt;

        this.setState({
            proposedBooking: {
                ...this.state.proposedBooking,
                startAt,
                endAt
            }
        });
    }

    selectGuests(event) {
        this.setState({
            proposedBooking: {
                ...this.state.proposedBooking,
                guests: parseInt(event.target.value, 10)
            }
        })
    }

    cancelConfirmation() {
        this.setState({
            modal: {
                open: false
            }
        })
    }

    addNewBookedOutDates(booking) {
        const dateRange = getRangeOfDates(booking.startAt, booking.endAt);
        this.bookedOutDates.push(...dateRange);
    }

    resetData() {
        this.dateRef.current.value = '';

        this.setState({ proposedBooking: { guests: '' } });
    }

    confirmProposedData() {
        const { startAt, endAt } = this.state.proposedBooking
        const days = getRangeOfDates(startAt, endAt).length - 1
        const { rental } = this.props

        this.setState({
            proposedBooking: {
                ...this.state.proposedBooking,
                days,
                totalPrice: days * rental.dailyRate,
                rental
            },
            modal: {
                open: true
            }
        })
    }

    reserveRental() {
        actions.createBooking(this.state.proposedBooking).then(
        (booking) => {
            this.addNewBookedOutDates(booking);
            this.cancelConfirmation();
            this.resetData();
            toast.success('Booking has been succesfuly created! Enjoy.');
        },
        (errors) => {
            this.setState({errors});
        })
    }

    render() {
        const { rental } = this.props
        const { startAt, endAt, guests } = this.state.proposedBooking

        return (
            <div className="booking form">
                <ToastContainer />
                <h3 className="booking__price"> $ {rental.dailyRate} <span className="booking__per-night">per night</span></h3>
                <hr className="solid--light" />
                <div className="form-group">
                    <label className="date" htmlFor="dates">Dates</label>
                    <DateRangePicker onApply={this.handleApply}
                                    isInvalidDate={this.checkInvalidDates} 
                                    opens="left" 
                                    containerStyles={{display: 'block'}}>
                        <input ref={this.dateRef} id="dates" type="text" className="form-control"></input>
                    </DateRangePicker>
                </div>
                <div className="form-group">
                    <label htmlFor="guests">Guests</label>
                    <input onChange={(event) => { this.selectGuests(event)}}
                            value={guests}
                            type="number"
                            className="form-control"
                            id="guests"
                            aria-describedby="guests"
                            placeholder="">
                    </input>
                </div>
                <button disabled={!startAt || !endAt || !guests}
                    onClick={() => this.confirmProposedData()} 
                    className="btn btn--cta btn-confirm btn-block">
                    Reserve place now
                </button>
                <hr className="solid--light" />
                <p className="booking__note-title">People are interested in this { rental.category }.</p>
                <p className="booking__note-text">
                    More than 500 people checked this rental last month.
                </p>
                <BookingModal open={this.state.modal.open}
                            closeModal={this.cancelConfirmation}
                            confirmModal={this.reserveRental}
                            booking={this.state.proposedBooking}
                            errors={this.state.errors}
                            rentalPrice={rental.dailyRate}/>
            </div>
        )
    }
}

export default Booking