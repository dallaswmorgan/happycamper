class Site < ApplicationRecord
  acts_as_mappable default_units: :miles,
                   default_formula: :sphere,
                   distance_field_name: :distance,
                   lat_column_name: :lat,
                   lng_column_name: :lng

  validates :name, :state, :city, :lat,
            :lng, :price, :guest_limit, presence: true

  belongs_to(
    :host,
    foreign_key: :user_id,
    class_name: "User"
  )

  has_many :site_images
  has_many :reservations
  has_many :reviews

  has_one :amenity_list,
    class_name: SiteAmenity

  def self.in_bounds(geo_bounds)
    p geo_bounds
    self.where("lat < ?", geo_bounds[:northEast][:lat])
      .where("lat > ?", geo_bounds[:southWest][:lat])
      .where("lng > ?", geo_bounds[:southWest][:lng])
      .where("lng < ?", geo_bounds[:northEast][:lng])
  end

  def self.featured_sites
    self.where("featured = true")
  end

  def average_review
    total_stars = 0
    total_reviews = 0
    Review.where(site_id: self.id).each do |review|
      total_stars += review.rating
      total_reviews += 1
    end
    return 0 if total_reviews == 0 || total_stars == 0
    total_stars / total_reviews
  end

  def self.eclipse_sites
    #Eclipse Predictions by Fred Espenak, NASA's GSFC
    @eclipse_bounds ||= Geokit::Polygon.new([
      Geokit::LatLng.new(45.193, -125.063),
      # Geokit::LatLng.new(45.162, -123.265),
      # Geokit::LatLng.new(45.119, -121.506),
      # Geokit::LatLng.new(45.066, -120.183),
      # Geokit::LatLng.new(45.004, -118.492),
      # Geokit::LatLng.new(44.533, -117.231),
      # Geokit::LatLng.new(44.453, -115.598),
      # Geokit::LatLng.new(44.367, -114.390),
      Geokit::LatLng.new(44.273, -113.207),
      # Geokit::LatLng.new(44.173, -112.046),
      # Geokit::LatLng.new(44.066, -110.505),
      # Geokit::LatLng.new(43.554, -109.385),
      # Geokit::LatLng.new(43.436, -108.283),
      # Geokit::LatLng.new(43.313, -107.199),
      # Geokit::LatLng.new(43.184, -106.131),
      # Geokit::LatLng.new(43.051, -105.079),
      # Geokit::LatLng.new(42.513, -104.042),
      # Geokit::LatLng.new(42.371, -103.019),
      # Geokit::LatLng.new(42.225, -102.009),
      # Geokit::LatLng.new(42.074, -101.012),
      # Geokit::LatLng.new(41.520, -100.026),
      Geokit::LatLng.new(41.362, -99.052),
      # Geokit::LatLng.new(41.200, -98.089),
      # Geokit::LatLng.new(41.035, -97.136),
      # Geokit::LatLng.new(40.466, -96.193),
      # Geokit::LatLng.new(40.294, -95.259),
      # Geokit::LatLng.new(40.119, -94.333),
      # Geokit::LatLng.new(39.541, -93.416),
      Geokit::LatLng.new(39.359, -92.506),
      # Geokit::LatLng.new(39.175, -92.004),
      # Geokit::LatLng.new(38.588, -91.109),
      # Geokit::LatLng.new(38.398, -90.220),
      # Geokit::LatLng.new(38.205, -89.337),
      # Geokit::LatLng.new(38.009, -88.460),
      # Geokit::LatLng.new(37.411, -87.588),
      # Geokit::LatLng.new(37.210, -87.121),
      # Geokit::LatLng.new(37.007, -86.259),
      # Geokit::LatLng.new(36.401, -85.400),
      Geokit::LatLng.new(36.192, -84.546),
      # Geokit::LatLng.new(35.581, -84.094),
      # Geokit::LatLng.new(35.367, -83.246),
      # Geokit::LatLng.new(35.151, -82.400),
      # Geokit::LatLng.new(34.532, -81.556),
      # Geokit::LatLng.new(34.311, -81.114),
      # Geokit::LatLng.new(34.087, -80.274),
      # Geokit::LatLng.new(33.460, -79.434),
      # Geokit::LatLng.new(33.231, -78.595),
      # Geokit::LatLng.new(32.599, -78.156),
      # Geokit::LatLng.new(32.365, -77.317),
      # Geokit::LatLng.new(32.127, -76.477),
      Geokit::LatLng.new(31.487, -76.036),
      # Geokit::LatLng.new(31.245, -75.194),
      # Geokit::LatLng.new(30.599, -74.349),
      # Geokit::LatLng.new(30.351, -73.501),
      # Geokit::LatLng.new(30.099, -73.050),
      # Geokit::LatLng.new(29.444, -72.195),
      # Geokit::LatLng.new(29.187, -71.336),
      # Geokit::LatLng.new(28.525, -70.471),
      Geokit::LatLng.new(28.261, -70.001),
      # Geokit::LatLng.new(27.592, -69.123),
      # Geokit::LatLng.new(27.320, -68.239),
      # Geokit::LatLng.new(27.044, -67.345),
      # Geokit::LatLng.new(26.364, -66.442),
      # Geokit::LatLng.new(26.080, -65.528),
      # Geokit::LatLng.new(25.390, -65.002),
      Geokit::LatLng.new(25.096, -64.062),
      # Geokit::LatLng.new(24.397, -63.107),
      # Geokit::LatLng.new(24.091, -62.135),
      # Geokit::LatLng.new(23.380, -61.144),
      # Geokit::LatLng.new(23.061, -60.131),
      # Geokit::LatLng.new(22.335, -59.093),
      # Geokit::LatLng.new(22.001, -58.027),
      # Geokit::LatLng.new(21.258, -56.528),
      Geokit::LatLng.new(20.504, -55.391),
      # Geokit::LatLng.new(20.139, -54.210),
      # Geokit::LatLng.new(19.360, -52.575),
      # Geokit::LatLng.new(18.564, -51.276),
      # Geokit::LatLng.new(18.148, -49.497),
      # Geokit::LatLng.new(17.308, -48.014),
      # Geokit::LatLng.new(16.435, -45.594),
      # Geokit::LatLng.new(15.516, -43.376),
      # Geokit::LatLng.new(14.526, -40.444),
      Geokit::LatLng.new(13.396, -36.486),

      # Southern Limit
      Geokit::LatLng.new(44.251, -124.355),
      # Geokit::LatLng.new(44.210, -122.589),
      # Geokit::LatLng.new(44.160, -121.260),
      # Geokit::LatLng.new(44.100, -119.566),
      # Geokit::LatLng.new(44.032, -118.304),
      # Geokit::LatLng.new(43.556, -117.070),
      # Geokit::LatLng.new(43.472, -115.463),
      # Geokit::LatLng.new(43.382, -114.281),
      Geokit::LatLng.new(43.285, -113.122),
      # Geokit::LatLng.new(43.182, -111.585),
      # Geokit::LatLng.new(43.073, -110.468),
      # Geokit::LatLng.new(42.558, -109.370),
      # Geokit::LatLng.new(42.439, -108.290),
      # Geokit::LatLng.new(42.314, -107.226),
      # Geokit::LatLng.new(42.185, -106.179),
      # Geokit::LatLng.new(42.052, -105.146),
      # Geokit::LatLng.new(41.514, -104.128),
      # Geokit::LatLng.new(41.372, -103.123),
      # Geokit::LatLng.new(41.226, -102.131),
      # Geokit::LatLng.new(41.077, -101.151),
      # Geokit::LatLng.new(40.523, -100.182),
      Geokit::LatLng.new(40.367, -99.224),
      # Geokit::LatLng.new(40.206, -98.277),
      # Geokit::LatLng.new(40.043, -97.339),
      # Geokit::LatLng.new(39.476, -96.410),
      # Geokit::LatLng.new(39.307, -95.490),
      # Geokit::LatLng.new(39.134, -94.578),
      # Geokit::LatLng.new(38.558, -94.073),
      Geokit::LatLng.new(38.380, -93.176),
      # Geokit::LatLng.new(38.199, -92.286),
      # Geokit::LatLng.new(38.015, -91.403),
      # Geokit::LatLng.new(37.428, -90.525),
      # Geokit::LatLng.new(37.239, -90.053),
      # Geokit::LatLng.new(37.047, -89.186),
      # Geokit::LatLng.new(36.452, -88.325),
      # Geokit::LatLng.new(36.255, -87.467),
      # Geokit::LatLng.new(36.056, -87.014),
      # Geokit::LatLng.new(35.454, -86.164),
      Geokit::LatLng.new(35.249, -85.318),
      # Geokit::LatLng.new(35.042, -84.475),
      # Geokit::LatLng.new(34.433, -84.035),
      # Geokit::LatLng.new(34.221, -83.196),
      # Geokit::LatLng.new(34.006, -82.360),
      # Geokit::LatLng.new(33.390, -81.525),
      # Geokit::LatLng.new(33.170, -81.092),
      # Geokit::LatLng.new(32.549, -80.259),
      # Geokit::LatLng.new(32.324, -79.426),
      # Geokit::LatLng.new(32.098, -78.593),
      # Geokit::LatLng.new(31.468, -78.160),
      # Geokit::LatLng.new(31.236, -77.326),
      Geokit::LatLng.new(31.002, -76.490),
      # Geokit::LatLng.new(30.364, -76.053),
      # Geokit::LatLng.new(30.124, -75.213),
      # Geokit::LatLng.new(29.481, -74.370),
      # Geokit::LatLng.new(29.235, -73.524),
      # Geokit::LatLng.new(28.586, -73.074),
      # Geokit::LatLng.new(28.334, -72.219),
      # Geokit::LatLng.new(28.079, -71.358),
      Geokit::LatLng.new(27.420, -70.492),
      # Geokit::LatLng.new(27.158, -70.019),
      # Geokit::LatLng.new(26.493, -69.138),
      # Geokit::LatLng.new(26.223, -68.248),
      # Geokit::LatLng.new(25.550, -67.349),
      # Geokit::LatLng.new(25.272, -66.439),
      # Geokit::LatLng.new(24.590, -65.517),
      Geokit::LatLng.new(24.303, -64.582),
      # Geokit::LatLng.new(24.011, -64.031),
      # Geokit::LatLng.new(23.313, -63.064),
      # Geokit::LatLng.new(23.009, -62.077),
      # Geokit::LatLng.new(22.299, -61.070),
      # Geokit::LatLng.new(21.582, -60.037),
      # Geokit::LatLng.new(21.258, -58.577),
      # Geokit::LatLng.new(20.524, -57.485),
      Geokit::LatLng.new(20.181, -56.357),
      # Geokit::LatLng.new(19.427, -55.185),
      # Geokit::LatLng.new(19.059, -53.561),
      # Geokit::LatLng.new(18.277, -52.276),
      # Geokit::LatLng.new(17.476, -50.514),
      # Geokit::LatLng.new(17.053, -49.054),
      # Geokit::LatLng.new(16.200, -47.065),
      # Geokit::LatLng.new(15.307, -44.496),
      # Geokit::LatLng.new(14.352, -42.047),
      Geokit::LatLng.new(13.286, -38.280)
      ])
    self.select { |site| @eclipse_bounds.contains?(site) }
  end
end
