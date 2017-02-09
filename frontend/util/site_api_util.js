export const fetchSites = filters => {
  return $.ajax({
    method: 'GET',
    url: 'api/sites',
    data: filters
  });
};

export const fetchFeaturedSites = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/sites',
    data: { featured: true }
  });
};

export const fetchEclipseSites = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/sites',
    data: { eclipse: true }
  });
};

export const fetchSite = id => {
  return $.ajax({
    method: 'GET',
    url: `api/sites/${id}`
  });
};


export const createSite = site => {
  return $.ajax({
    method: 'POST',
    url: 'api/sites',
    data: { site }
  });
};
export const updateSite = site => {
  return $.ajax({
    method: 'PATCH',
    url: `api/sites/${site.id}`,
    data: { site }
  });
};

export const deleteSite = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/sites/${id}`
  });
};

export const createImage = image => (
  $.ajax({
    method: 'POST',
    url: 'api/site_images',
    data: { image }
  })
);

export const updateAmenity = amenity => (
  $.ajax({
    method: 'PATCH',
    url: `api/site_amenities/${amenity.id}`,
    data: { site_amenity: amenity }
  })
);
