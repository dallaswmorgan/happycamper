json.extract! review, :id, :user_id, :site_id, :rating, :body

json.set! :author_fname, review.user.fname
json.set! :author_lname, review.user.lname
json.set! :author_image, review.user.image_url
