# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# guest = User.create!(fname: "Guest", lname: "Camper", email: "guest@happycamper.camp", password: "camphappy", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484816721/Logomakr_5YRquQ_t90pks.png")
users = []
users << dallas = User.create!(fname: "Dallas", lname: "Morgan", email: "dallaswmorgan@gmail.com", password: "happycamperrulez", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1485077078/Dallas_Morgan_uagewq.jpg")
users << darwin = User.create!(fname: "Charles", lname: "Darwin", email: "darwin@happycamper.camp", password: "finches", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1485077006/800px-1878_Darwin_photo_by_Leonard_from_Woodall_1884_-_cropped_grayed_partially_cleaned_jpqjq6.jpg")
users << muir = User.create!(fname: "John", lname: "Muir", email: "muir@happycamper.camp", password: "yosemite", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1485076871/John_Muir_by_Carleton_Watkins_2C_c1875_qjbatb.jpg")
users << thoreau = User.create!(fname: "Henry", lname: "Thoreau", email: "thoreau@happycamper.camp", password: "waldenpond", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1485076932/800px-Benjamin_D._Maxham_-_Henry_David_Thoreau_-_Restored_ijzo1k.jpg")
users << roosevelt = User.create!(fname: "Teddy", lname: "Roosevelt", email: "teddy@happycamper.camp", password: "mooserider", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1485076467/lossy-page1-800px-President_Roosevelt_-_Pach_Bros.tif_s5jx24.jpg")
users << goodall = User.create!(fname: "Jane", lname: "Goodall", email: "goodall@happycamper.camp", password: "chimpz", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1485076072/Jane_Goodall_2015_cmiuza.jpg")
users << brockovich = User.create!(fname: "Erin", lname: "Brokovich", email: "brokovich@happycamper.camp", password: "pgesux", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1485076166/800px-Erin_Brockovich__2830109127682_29_uzuajr.jpg")
users << carson = User.create!(fname: "Rachel", lname: "Carson", email: "carson@happycamper.camp", password: "silentsprings", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1485076303/800px-Rachel-Carson_bqmqwy.jpg")
users << attenborough = User.create!(fname: "David", lname: "Attenborough", email: "attenborough@happycamper.camp", password: "planetearth", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1485085356/web-David-Attenborough-1-pa_nyahxe.jpg")
users << boone = User.create!(fname: "Daniel", lname: "Boone", email: "boone@happycamper.camp", password: "danielboone", image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1485085516/uewb_02_img0098_sms4p4.jpg")

descriptions = []
descriptions << "Beautiful camp site with great long range views! You are welcome to pitch your own tent or hang your hammock wherever you want on top of the mountain. You have the entire mountain top to yourself, the closest residence is my own and it is in the valley so you have great privacy."
descriptions << "Pitch a tent in the pine woods near the pond and let the frogs and crickets sing you to sleep. Enjoy the solitude and star filled night sky."
descriptions << "This campground runs the gamut of camping options, from tent sites up to glamping status yurts and cabins. Showers and flush toilets are nearby almost all sites and fire rings and picnic tables round out the amenities making for a comfy outdoor sleep for all levels. It's also conveniently accessible to civilization within a half hour or less if you forgot to bring the s’mores (how could you forget the s'mores?!)."
descriptions << "Open air sites for car and motorcycle camping on a 200ft mesa looking over a vast valley to the west."
descriptions << "Expect to see wildlife, my land has Turkey and Deer. You are also free to come get some farm fresh eggs from my Chickens or just pet the goats and take in the farm."
descriptions << "With 46 acres of unspoiled nature you will have all the privacy you need, but you are still only 7 minutes drive from supermarkets. If you are into hiking there are 'trails' ranging from easy to down right exhausting. There is a small spring fed pond if you feel like a (cold) swim in the morning. We are continually improving the land and adding amenities, so reach out to us for details or special requirements."
descriptions << "Rise and shine with the roosters & live as shepherds would have while tending their sheep. The site has a fenced yard, picnic table & fire pit situated in a peaceful walnut orchard, steps from an outdoor shower."
descriptions << "Bask under the breath taking stars at night and feel the healing effect of nature all around you during your stay. Hike, bike, swim, site-see and don’t forget to visit the Yuba River! So many things are available to you. "

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



def random_name
  site_first_names = ["Oak", "Bear", "River", "Redwood", "Wild", "Bullfrog", "Poppy", "Kearsarge", "Muir", "Wildflower", "Elk", "Eagle", "Enchanted", "Willow", "Amber", "Sparrow"]
  site_second_names = ["View", "Hill", "Dunes", "Valley", "Trail", "Oasis", "Crest"]
  site_third_names = ["Camp", "Retreat", "Ravine", "Rock", "Glen", "Garden", "Homestead", "Park", "Forest", "Yurt", "Tipi", "Paradise", "Meadow", "Lake"]
  num = rand 5
  if num == 0
    return site_second_names.sample + " " + site_third_names.sample
  elsif num == 1
    return site_first_names.sample + " " + site_third_names.sample
  else
    return site_first_names.sample + " " + site_second_names.sample + " " + site_third_names.sample
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

def generate_random_reviews(site, users)
  reviews = []
  users = users.shuffle
  reviews << { body: "I'm hesitant to write this review, as #{site.name} is one of the few
    remaining hidden gems in #{site.city}, and I don't want it to blow up. I absolutely love the solitude I find in this place,
    and come here when I need to get away from it all and be alone with my thoughts. I cannot reccommend
    #{site.name} enough!", rating: 5, site_id: site.id, user_id: users[0].id }
  reviews << {body: "#{site.name} is a staple of summertime fun. With its easy car access and reliable cell service,
    it's a good compromise for your city-mouse friends who need a little something extra to be cooerced into camping.
    But that's not to say it's not real camping! You will be definitely be getting down and dirty if you stay here.",
    rating: 4, site_id: site.id, user_id: users[1].id }
  reviews << { body: "This is a beautiful spot and the hosts were so friendly and helpful.
    We camped out in the middle of the pasture and had a gorgeous view.
    The grass can be quite tall with lots of burrs, so long pants are a good idea.
    Also, if you have seasonal allergies of any kind, bring some meds -- it's no joke out there. But, it's so so worth it.
    The camp is lovely and there's lots to see. I highly recommend it!",
    rating: 5, site_id: site.id, user_id: users[2].id }
  reviews << { body: "If you live near #{site.city} (or not) this is the perfect little getaway!
    The drive up to the site is beautiful, and the site is easily accessible.
    The oak trees provide plenty of shade, and the gravel drive allows you to pull your vehicle right up close.
    The portable toilet was convenient and very clean. The host even provided a gas grill- just bring your own propane tank!
    The quiet allowed us to read all day, and then enjoy a hike around the property in the evening.
    The patio over the canyon was also lovely. We'll definitely be back when the creek and the small lake are filled!",
    rating: 4, site_id: site.id, user_id: users[3].id }
  reviews << { body: "This is definitely a family-oriented campsite. Lost of kids running around during the day.
    If you're a light sleeper, I'd recommend a set of earplugs or headphones,
    otherwise you might hear kids crying or partying from nearby camp sites into the night.",
    rating: 3, site_id: site.id, user_id: users[4].id }
  reviews << { body: "We spent three nights camping at #{site.name} and absolutely loved it.
    There was no-one else staying so we had the place to ourselves, but it's so big and the sites so spread out that you would hardly notice other campers anyway.
    We loved the communal cooking area - so useful to have a sink!
    We have two young boys who enjoyed running wild in the big field, and there are three great walking trails which lead directly out from the campsite.
    The site is also just outside #{site.city}, within very easy reach and worth exploring.
    Don't expect luxury camping - there are basic long-drop type toilets and no showers, but if you enjoy plenty of space and seclusion and being close to nature then this is your spot. Highly recommended.",
    rating: 5, site_id: site.id, user_id: users[5].id}
  reviews << { body: "Great place to camp! Very private and lovely views.
    Definitely need a vehicle with good ground clearance to get to the top to drop off your supplies.
    We loved everything about this location and we plan to go back in the fall.
    It's also a great place to camp with your dogs. So much room for them to run and play",
    rating: 4, site_id: site.id, user_id: users[6].id }
  reviews << { body: "If you are near #{site.city} and looking to camp, go out of your way to get here.
    Absolutely beautiful land, wish we could have stayed longer but enjoyed every second we were there.",
    rating: 5, site_id: site.id, user_id: users[7].id }
  (rand(3) + 4).times do
    Review.create!(reviews.pop)
  end
end

def generate_random_site(urls1, urls2, urls3, users, descriptions)
  location = random_location
  lat = location[:lat]
  lng = location[:lng]
  city = location[:city]
  state = location[:state]
  name = random_name
  description = descriptions.sample
  _public = false
  featured = false
  region_id = 1
  users = users.dup.shuffle!
  user_id = users.pop.id
  price = rand(5..25) * 5
  guest_limit = rand(1..6) * 2
  site = Site.create(lat: lat, lng: lng, city: city, state: state, name: name,
          description: description, public: _public, featured: featured,
          region_id: region_id, user_id: user_id, price: price, guest_limit: guest_limit)
  SiteImage.create(site_id: site.id, url: urls1.sample)
  SiteImage.create(site_id: site.id, url: urls2.sample)
  SiteImage.create(site_id: site.id, url: urls3.sample)

  generate_random_reviews(site, users)
end

image_one = HTTParty.get('https://pixabay.com/api/?key=4030205-09edb77b80f0f13b40ea34bea&q=camping+tent&image_type=photo')
image_two = HTTParty.get('https://pixabay.com/api/?key=4030205-09edb77b80f0f13b40ea34bea&q=sunset+view&image_type=photo')
image_three = HTTParty.get('https://pixabay.com/api/?key=4030205-09edb77b80f0f13b40ea34bea&q=forest_hiking&image_type=photo')
urls1 = image_one["hits"].map { |pic| pic["webformatURL"] }
urls2 = image_two["hits"].map { |pic| pic["webformatURL"] }
urls3 = image_three["hits"].map { |pic| pic["webformatURL"] }

100.times do
  generate_random_site(urls1, urls2, urls3, users, descriptions)
end
