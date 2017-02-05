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
    class_name: "SiteAmenity"

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
      # Northern Limit, West => East
      Geokit::LatLng.new(45.193, -125.063),
      Geokit::LatLng.new(41.362, -99.052),
      Geokit::LatLng.new(36.192, -84.546),
      Geokit::LatLng.new(28.261, -70.001),
      Geokit::LatLng.new(13.396, -36.486),

      # Southern Limit, East => West
      Geokit::LatLng.new(13.286, -38.280),
      Geokit::LatLng.new(27.420, -70.492),
      Geokit::LatLng.new(35.249, -85.318),
      Geokit::LatLng.new(40.367, -99.224),
      Geokit::LatLng.new(44.251, -124.355)
      ])
    self.select { |site| @eclipse_bounds.contains?(site) }
  end
end
