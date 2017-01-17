class SiteAmenity < ApplicationRecord
  validates :site, :drinking_water, :shower, :fire_ring, :pets_allowed,
  :toilet, :picnic_table, presence: true
  belongs_to :site
end
