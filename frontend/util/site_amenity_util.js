export const updateAmenity = amenity => (
  $.ajax({
    method: 'PATCH',
    url: 'api/site_amenities',
    data: { site_amenity: amenity }
  })
);
