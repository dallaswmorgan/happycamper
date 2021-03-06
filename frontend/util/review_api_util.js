export const fetchReviews = (site_id) => (
  $.ajax({
    method: 'GET',
    url: '/api/reviews',
    data: { site_id }
  })
);

export const fetchReview = id => (
  $.ajax({
    method: 'GET',
    url: `/api/reviews/${id}`,
  })
);

export const createReview = review => {
  return(
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review },
  }));
};

export const updateReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: { review },
  })
);

export const deleteReview = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`
  })
);
