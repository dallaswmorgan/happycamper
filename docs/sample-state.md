{
  currentUser: {
    id: 1,
    fname: "Dallas"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
  },
  sites: {
    1: {
      title: "Caswell Memorial Campground",
      description: "Situated on the Stanislaus River, this state-run campground has all the amenities you'll need for some wet summer-time fun",
      region_id: 2,
      user_id: 1,
      price: 25,
      image_urls: {
        1: "",
        2: ""
      }
      amenities: {
        drinking_water: true,
        showers: true,
        pets_allowed: false,
        bathrooms: true,
        fire_ring: true,
        picnic_table: true,
      }
      latitude: 37.696,
      longitude -121.182,
      guest_limit: 6,
    }
  },
  reviews: {
    1: {
      body: "Love this campground! Be sure to checkout site 6 for direct river access",
      author_id: 1,
      place_id: 1,
      number_of_stars: 5
    }
  },
  bookings: {
    1: {
      user_id: 1,
      place_id: 1,
      check_in_date: 5/30/2017,
      check_out_date: 6/3/2017,
      number_of_guests: 6
    }
  },
  users: {
    1: {
      fname: "Dallas",
      lname: "Morgan",
      email: "dallaswmorgan@gmail.com",
      image_url: "",
    }
  }  
}
