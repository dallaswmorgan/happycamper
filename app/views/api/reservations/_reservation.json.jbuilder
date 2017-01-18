json.extract! reservation, :id, :check_in_date, :check_out_date, :number_of_guests

json.set! :site_main_image, reservation.site.site_images[0].url

json.set! :host_image_url, reservation.site.host.image_url

json.set! :host_id, reservation.site.host.id

json.set! :site_name, reservation.site.name

json.set! :site_id, reservation.site.id
