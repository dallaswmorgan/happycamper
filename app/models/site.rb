class Site < ApplicationRecord
  validates :name, :state, :city, :lat, :lng, :price, :guest_limit, presence: true

  belongs_to(
    :host,
    foreign_key: :user_id,
    class_name: "User"
  )

  def in_bounds(geo_bounds)
    self.where("lat < ?", geo_bounds[:northEast][:lat])
      .where("lat > ?", geo_bounds[:southWest][:lat])
      .where("lng > ?", geo_bounds[:southWest][:lng])
      .where("lng < ?", geo_bounds[:northEast][:lng])
  end

  def featured_sites
    self.where("featured = true")
  end

end
