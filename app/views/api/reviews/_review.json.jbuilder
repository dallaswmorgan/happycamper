json.extract! review, :user_id, :site_id, :rating, :body

json.set! :author, review.user.fname
