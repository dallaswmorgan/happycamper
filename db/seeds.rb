# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create!(fname: "Guest", lname: "Camper", email: "guest@happycamper.camp", password: "camphappy", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484816721/Logomakr_5YRquQ_t90pks.png")
dallas = User.create!(fname: "Dallas", lname: "Morgan", email: "dallaswmorgan@gmail.com", password: "camphappy", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484173946/Logomakr_9Hu3Jp_mppdcg.png")

hilton_park = Site.create(name: "Hilton Park", description: "Situated on the calm banks of the Russian River, Hilton Park is the perfect getaway spot for families and groups. Be sure to bring your inner-tube, as the river is ideal for floating!",
user_id: 2, region_id: 1, featured: true, public: false, state: "California", city: "Forestville", lat: 38.504777, lng: -122.941945, price: 35, guest_limit: 8 )

caswell_park = Site.create(name: "Caswell Memorial State Park", description: "Right on the banks of the Stanislaus River, Caswell Memorial State Park offers an enticing retreat to Bay Area campers looking to soak up the heat while soaking in the water",
user_id: 2, region_id: 1, featured: true, public: true, state: "California", city: "Ripon", lat: 37.696086, lng: -121.1844123, price: 25, guest_limit: 6 )

briones_retreat = Site.create(name: "Briones Retreat", description: "Nestled in the Mt Diablo foothills, this quiet piece of land is ideal for taking in the beauty of the rolling hills. Come relax the night away in our sturdy wood-platform canvas tent, and be gently awoken by birdsong in the morning. NO PETS",
user_id: 1, region_id: 1, featured: true, public: false, state: "California", city: "Danville", lat: 37.865438, lng: -121.967040, price: 80, guest_limit: 4 )

SiteImage.create(site_id: 1, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484267441/russian-river-stock_q6wou3.jpg", caption: "The river at dawn")
SiteImage.create(site_id: 1, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484447737/russian-river-pic_raa3rr.jpg", caption: "Site overlooking the river")
SiteImage.create(site_id: 1, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484448367/Campfire_guitar_wcauws.jpg", caption: "Songs by the campfire at night")

SiteImage.create(site_id: 1, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484448112/russian-river-float_lgfnqz.jpg", caption: "Nothing more relaxing that floating down the river with a beer in hand")

SiteImage.create(site_id: 2, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484391834/mt-rainier_ecyauh.jpg", caption: "View of the mountain from one of the many hiking trails")
SiteImage.create(site_id: 3, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484421586/briones-retreat_eum1bf.jpg", caption: "It's hard to beat watching the sunrise from your cozy canvas tent")

Review.create(site_id: 1, user_id: 2, rating: 5, body: "I love this site! I had my 18th birthday party here :)")
