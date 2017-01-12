export const fetchSites = data => {
  return $.ajax({
    method: 'GET',
    url: 'api/sites',
    data
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
    method: 'PUT',
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
