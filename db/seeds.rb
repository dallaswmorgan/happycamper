# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
USERS = []
USERS << guest = User.create!(fname: "Guest", lname: "Camper", email: "guest@happycamper.camp", password: "camphappy", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484816721/Logomakr_5YRquQ_t90pks.png")
USERS << dallas = User.create!(fname: "Dallas", lname: "Morgan", email: "dallaswmorgan@gmail.com", password: "camphappy", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484173946/Logomakr_9Hu3Jp_mppdcg.png")
USERS << darwin = User.create!(fname: "Charles", lname: "Darwin", email: "darwin@happycamper.camp", password: "finches", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484173946/Logomakr_9Hu3Jp_mppdcg.png")
USERS << muir = User.create!(fname: "John", lname: "Muir", email: "muir@happycamper.camp", password: "yosemite", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484173946/Logomakr_9Hu3Jp_mppdcg.png")
# USERS << anish = User.create!(fname: "Heather", lname: "Anderson", email: "anish@happycamper.camp", password: "anishhikes", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484173946/Logomakr_9Hu3Jp_mppdcg.png")
USERS << thoreau = User.create!(fname: "Henry", lname: "Thoreau", email: "thoreau@happycamper.camp", password: "walden", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484173946/Logomakr_9Hu3Jp_mppdcg.png")
# USERS << JAR = User.create!(fname: "Ray", lname: "Jardine", email: "jardine@happycamper.camp", password: "jardine", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484173946/Logomakr_9Hu3Jp_mppdcg.png")

hilton_park = Site.create(name: "Hilton Park", description: "Situated on the calm banks of the Russian River, Hilton Park is the perfect getaway spot for families and groups. Be sure to bring your inner-tube, as the river is ideal for floating!",
user_id: 2, region_id: 1, featured: true, public: false, state: "California", city: "Forestville", lat: 38.504777, lng: -122.941945, price: 35, guest_limit: 8 )

caswell_park = Site.create(name: "Caswell Memorial State Park", description: "Right on the banks of the Stanislaus River, Caswell Memorial State Park offers an enticing retreat to Bay Area campers looking to soak up the heat while soaking in the water",
user_id: 2, region_id: 1, featured: true, public: true, state: "California", city: "Ripon", lat: 37.696086, lng: -121.1844123, price: 25, guest_limit: 6 )

briones_retreat = Site.create(name: "Briones Retreat", description: "Nestled in the Mt Diablo foothills, this quiet piece of land is ideal for taking in the beauty of the rolling hills. Come relax the night away in our sturdy wood-platform canvas tent, and be gently awoken by birdsong in the morning.",
user_id: 1, region_id: 1, featured: true, public: false, state: "California", city: "Danville", lat: 37.865438, lng: -121.967040, price: 80, guest_limit: 4 )

SiteImage.create(site_id: hilton_park.id, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484267441/russian-river-stock_q6wou3.jpg", caption: "The river at dawn")
SiteImage.create(site_id: hilton_park.id, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484447737/russian-river-pic_raa3rr.jpg", caption: "Site overlooking the river")
SiteImage.create(site_id: hilton_park.id, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484448367/Campfire_guitar_wcauws.jpg", caption: "Songs by the campfire at night")

SiteImage.create(site_id: hilton_park.id, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484448112/russian-river-float_lgfnqz.jpg", caption: "Nothing more relaxing that floating down the river with a beer in hand")

SiteImage.create(site_id: caswell_park.id, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484391834/mt-rainier_ecyauh.jpg", caption: "View of the mountain from one of the many hiking trails")
SiteImage.create(site_id: briones_retreat.id, url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484421586/briones-retreat_eum1bf.jpg", caption: "It's hard to beat watching the sunrise from your cozy canvas tent")

Review.create(site_id: 1, user_id: 2, rating: 5, body: "I love this site! I had my 18th birthday party here :)")


def random_name
  site_first_names = ["Oak", "River", "Redwood", "Wild", "Bullfrog", "Kearsarge", "Muir", "Elk", "Eagle", "Enchanted", "Willow"]
  site_second_names = ["View", "Hill", "Dunes", "Valley", "Trail", "Homestead", "Oasis"]
  site_third_names = ["Camp", "Retreat", "Ravine", "Rock", "Garden", "Park", "Yurt", "Tipi", "Paradise"]
  num = rand 3
  if num == 0
    return site_first_names.sample + " " + site_second_names.sample + " " + site_third_names.sample
  elsif num == 1
    return site_first_names.sample + " " + site_third_names.sample
  else
    return site_second_names.sample + " " + site_third_names.sample
  end
end


def random_location
  # rough box around USA
  lat = rand(28.415560...48.425555)
  lng = rand(-126.474609...-66.005859)
  geo_localization = "#{lat},#{lng}"
  query = Geocoder.search(geo_localization).first
  if query
    city = query.city
    state = query.state
    country = query.country
    if city && state && country == "United States"
      return { lat: lat, lng: lng, city: city, state: state }
    end
  end
  random_location
end

def generate_random_review(site)
  reviews = []
  reviews << { body: "I'm hesitant to write this review, as #{site.name} is one of the few
  remaining hidden gems in #{site.city}, and I don't want it to blow up. I absolutely love the solitude I find in this place,
  and come here when I need to get away from it all and be alone with my thoughts. I cannot reccommend
  #{site.name} enough!", rating: 5, site_id: site.id, user_id: DALLAS.id}
  reviews << {body: "#{site.name} is a staple of summertime fun. With its easy car access and reliable cell service,
  it's a good compromise for your city-mouse friends who need a little something extra to be cooerced into camping.
  But that's not to say it's not real camping! You will be definitely be getting down and dirty if you stay here.",
  rating: 4, site_id: site.id, user_id: GUEST.id }
  Review.create(reviews.sample)
end

def generate_random_site(urls1, urls2, urls3)
  location = random_location
  lat = location[:lat]
  lng = location[:lng]
  city = location[:city]
  state = location[:state]
  name = random_name
  description = "Test description"
  _public = false
  featured = false
  region_id = 1
  user_id = DALLAS.id
  price = rand(5..25) * 5
  guest_limit = rand(1..6) * 2
  site = Site.create(lat: lat, lng: lng, city: city, state: state, name: name,
          description: description, public: _public, featured: featured,
          region_id: region_id, user_id: user_id, price: price, guest_limit: guest_limit)
  SiteImage.create(site_id: site.id, url: urls1.sample)
  SiteImage.create(site_id: site.id, url: urls2.sample)
  SiteImage.create(site_id: site.id, url: urls3.sample)

  generate_random_review(site)
end

image_one = HTTParty.get('https://pixabay.com/api/?key=4030205-09edb77b80f0f13b40ea34bea&q=camping+tent&image_type=photo')
image_two = HTTParty.get('https://pixabay.com/api/?key=4030205-09edb77b80f0f13b40ea34bea&q=sunset+view&image_type=photo')
image_three = HTTParty.get('https://pixabay.com/api/?key=4030205-09edb77b80f0f13b40ea34bea&q=forest_hiking&image_type=photo')
urls1 = image_one["hits"].map { |pic| pic["webformatURL"] }
urls2 = image_two["hits"].map { |pic| pic["webformatURL"] }
urls3 = image_three["hits"].map { |pic| pic["webformatURL"] }
100.times do
  generate_random_site(urls1, urls2, urls3)
end
