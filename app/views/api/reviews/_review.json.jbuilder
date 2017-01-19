json.extract! review, :id, :user_id, :site_id, :rating, :body

json.set! :author, review.user.fname
