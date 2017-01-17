json.extract! booking, :id, :check_in_date, :check_out_date, :number_of_guests

json.set! :site_main_image, booking.site.site_images[0].url

json.set! :host_image_url, booking.place.host.image_url

json.set! :host_id, booking.place.host.id

json.set! :site_name, booking.site.name

json.set! :site_id, booking.site.id
