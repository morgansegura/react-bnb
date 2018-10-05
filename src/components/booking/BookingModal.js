import React from 'react'
import Modal from 'react-responsive-modal'
import { ResError } from 'components/shared/form/ResError'

export function BookingModal(props) {
    const { open, closeModal, booking, confirmModal, errors, rentalPrice } = props
    return (
        <Modal open={open} onClose={closeModal} little classNames={{modal: 'booking-modal'}}>
            <h4 className="modal__title">Simple Centered Modal</h4>
            <p className="modal__dates">{booking.startAt} / {booking.endAt}</p>
            <div className="modal__body">
                <strong>{booking.days}</strong> nights / 
                <strong>${rentalPrice}</strong> per night
                <p>Guests: <strong>{booking.guests}</strong></p>
                <p>Price: <strong>${booking.totalPrice}</strong></p>
                <p>Do you confirm your booking for the selected days?</p>
            </div>
            <ResError errors={errors}/>
            <div className="modal__footer">
                <button onClick={confirmModal} type="button" className="btn btn--cta">Confirm</button>
                <button type="button" onClick={closeModal} className="btn btn--cta">Cancel</button>
            </div>
        </Modal>
    )
}