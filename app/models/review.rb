class Review < ApplicationRecord
  validates :site, :user, :rating, presence: true

  belongs_to :site
  belongs_to :user

end
