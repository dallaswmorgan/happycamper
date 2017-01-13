import React from 'react';
import SiteIndexItem from './site_index_item';

const SiteIndex = (sites) => {
  console.log(sites);
  return(
    <div>
      {sites.map( site => (
        <SiteIndexItem site={site} key={site.id} />
      ))}
    </div>
  );
};

export default SiteIndex;
