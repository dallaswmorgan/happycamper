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
