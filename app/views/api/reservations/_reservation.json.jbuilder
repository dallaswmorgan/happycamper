json.extract! reservation, :id, :check_in_date, :check_out_date, :number_of_guests

if reservation.site.site_images[0].present?
  json.set! :site_main_image, reservation.site.site_images[0].url
end
json.set! :host_image_url, reservation.site.host.image_url

json.set! :host_id, reservation.site.host.id

json.set! :guest_limit, reservation.site.guest_limit

json.set! :site_name, reservation.site.name

json.set! :site_id, reservation.site.id
