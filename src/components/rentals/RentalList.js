import React, { Component } from 'react';
import RentalCard from './RentalCard';



// This will be valid data later

class RentalList extends Component {

    state = {
        rentals: [{
                id: 1,
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
                id: 2,
                title: "Central Apartment 2",
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
                id: 3,
                title: "Central Apartment 3",
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
                id: 4,
                title: "Central Apartment 4",
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
    }

    renderRentals() {
        return this.state.rentals.map((rental, i) => (
            <RentalCard 
                key={i}
                classes="card"
                title={rental.title} 
                city={rental.city} 
                street={rental.street} 
                category={rental.category} 
                image={rental.image} 
                bedrooms={rental.bedrooms} 
                description={rental.description} 
                dailyRate={rental.dailyRate} 
                shared={rental.shared} 
                createdAt={rental.createdAt} 
            />
        )) 
    }

    addRental() {
        const rentals = this.state.rentals
 
        rentals.push(1)

        this.setState({
            rentals
        })
    }

   render() {
        return (
            <div>
                <div className="row">
                    {this.renderRentals()}
                </div>
                <button className="btn btn--sm btn--cta" onClick={() => {this.addRental()}}>
                    Add Rental
                </button>    
            </div>     
        )
   }
}

export default RentalList