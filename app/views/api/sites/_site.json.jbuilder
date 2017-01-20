json.extract! site, :id, :name, :description, :user_id, :region_id, :featured,
              :public, :state, :city, :lat, :lng, :price, :guest_limit

json.site_images site.site_images, partial: 'api/sites/site_image', as: :site_image

json.set! :average_review, site.average_review
