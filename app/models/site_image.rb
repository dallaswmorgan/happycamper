class SiteImage < ApplicationRecord
  validates :site, :url, presence: true
  belongs_to :site
end
