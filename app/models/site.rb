class Site < ApplicationRecord
  validates :name, :state, :city, :lat, :lng, :price, :guest_limit, presence: true

  belongs_to(
    :host,
    foreign_key: :user_id,
    class_name: "User"
  )

  has_many :site_images
  has_many :reservations
  has_many :reviews

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
    return 0 if total_reviews == 0
    total_stars / total_reviews
  end
end
