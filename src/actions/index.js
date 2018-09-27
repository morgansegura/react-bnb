import { FETCH_RENTALS, FETCH_RENTAL_BY_ID_SUCCESS, FETCH_RENTAL_BY_ID_INIT } from './types'

const rentals = [{
        id: 'central-apartment-1',
        title: "Central Apartment",
        city: "New York",
        street: "Times Sqaure",
        category: "apartment",
        image: "https://picsum.photos/700/500/?image=1059",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
    },
    {
        id: 'central-condo-1',
        title: 'Central Condo 1',
        city: "San Francisco",
        street: "Main street",
        category: "condo",
        image: "https://picsum.photos/700/500/?image=1072",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 12,
        shared: true,
        createdAt: "24/12/2017"
    },
    {
        id: 'central-condo-2',
        title: 'Centeral Condo 2',
        city: "Bratislava",
        street: "Hlavna",
        category: "condo",
        image: "https://picsum.photos/700/500/?image=1074",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 334,
        shared: true,
        createdAt: "24/12/2017"
    },
    {
        id: 'central-house-1',
        title: 'Central House 1',
        city: "Berlin",
        street: "Haupt strasse",
        category: "house",
        image: "https://picsum.photos/700/500/?image=1025",
        bedrooms: 9,
        description: "Very nice apartment",
        dailyRate: 33,
        shared: true,
        createdAt: "24/12/2017"
    }
]

const fetchRentalByIdInit = () => {
    return {
        type: FETCH_RENTAL_BY_ID_INIT
    }
}

const fetchRentalByIdSuccess = (rental) => {
    return {
        type: FETCH_RENTAL_BY_ID_SUCCESS,
        rental
    }
}

export const fetchRentals = () => {

    return {
        type: FETCH_RENTALS,
        rentals
    }
}

export const fetchRentalById = (rentalId) => {

    return (dispatch) => {
        dispatch(fetchRentalByIdInit())
        setTimeout(() => {
            const rental = rentals.find((rental) => rental.id === rentalId)
            dispatch(fetchRentalByIdSuccess(rental))
        }, 1000)
    }
}

