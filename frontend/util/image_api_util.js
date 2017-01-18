export const createImage = image => (
  $.ajax({
    method: 'POST',
    url: 'api/site_images',
    data: { image }
  })
);
