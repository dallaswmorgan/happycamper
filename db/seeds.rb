# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create!(fname: "Guest", lname: "Camper", email: "guest@happycamper.camp", password: "camphappy", image_url: "http://res.cloudinary.com/dallaswmorgan/image/upload/v1484173946/Logomakr_9Hu3Jp_mppdcg.png")
dallas = User.create!(fname: "Dallas", lname: "Morgan", email: "dallaswmorgan@gmail.com", password: "camphappy", image_url: "http://res.cloudinary.com/dallaswmorgan/image/upload/v1484173946/Logomakr_9Hu3Jp_mppdcg.png")

hilton_park = Site.create(name: "Hilton Park", description: "Situated on the calm banks of the Russian River, Hilton Park is the perfect getaway spot for families and groups. Be sure to bring your inner-tube, as the river is ideal for floating!",
user_id: 2, region_id: 1, featured: true, public: false, state: "California", city: "Forestville", lat: 38.504777, lng: -122.941945, price: 35, guest_limit: 8 )

caswell_park = Site.create(name: "Caswell Memorial Sate Park", description: "Right on the banks of the Stanislaus River, Caswell Memorial State Park offers an enticing retreat to Bay Area campers looking to soak up the heat while soaking in the water",
user_id: 2, region_id: 1, featured: true, public: true, state: "California", city: "Ripon", lat: 37.696086, lng: -121.1844123, price: 25, guest_limit: 6 )
