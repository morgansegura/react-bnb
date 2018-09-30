
const Rental = require('./models/rental')
const User = require('./models/user')

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
        this.users =[{
            username: 'master',
            email: 'morgansegura@gmail.com',
            password: 'mastermaster'
        }]
    }

    async cleanDb() {
        await Rental.remove({})
        await User.remove({})
    }

    pushDataToDb() {
        const user = new User(this.users[0])

        this.rentals.forEach((rental) => {
            const newRental = new Rental(rental)
            newRental.user = user
            user.rentals.push(newRental)
            newRental.save()
        })
        user.save()
    }

    async seedDb() {
        await this.cleanDb()
        this.pushDataToDb()
    }
}

module.exports = FakeDb