
const Rental = require('./models/rental')

class FakeDb {
    constructor() {
        this.rentals = [{
            id: 'central-apartment-1',
            title: "Central Apartment",
            city: "New York",
            street: "Times Sqaure",
            category: "apartment",
            image: "https://picsum.photos/700/500/?image=1059",
            bedrooms: 3,
            description: "Very nice apartment",
            dailyRate: 34,
            shared: false
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
            shared: true
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
            shared: true
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
            shared: true
        }]
    }

    async cleanDb() {
        await Rental.remove({})
    }

    pushRentalsToDb() {
        this.rentals.forEach((rental) => {
            const newRental = new Rental(rental)

            newRental.save()
        })
    }

    seedDb() {
        this.cleanDb()
        this.pushRentalsToDb()
    }
}

module.exports = FakeDb