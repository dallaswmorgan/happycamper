class SiteAmenity < ApplicationRecord
  # validates :drinking_water, :shower, :fire_ring, :pets_allowed,
  #           :toilet, :picnic_table
  validates :site, presence: true, uniqueness: true
  belongs_to :site
end
