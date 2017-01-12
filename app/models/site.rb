class Site < ApplicationRecord
  validates :name, :state, :city, :lat, :lng, :price, :guest_limit, presence: true

  belongs_to(
    :host,
    foreign_key: :user_id,
    class_name: "User"
  )
  belongs_to :region

end
