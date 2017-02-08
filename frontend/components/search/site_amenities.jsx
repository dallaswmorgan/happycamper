import React from 'react';

class SiteAmenities extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const showerIcon = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486436538/shower_wcey6f.png' className='amenity-icon-index'/>;
    const showerIconGray = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486436718/shower_grey_cyc3m6.png' className='amenity-icon-index'/>;
    const toiletIcon = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437392/toilet_h5uokl.png' className='amenity-icon-index'/>;
    const toiletIconGray = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437401/toilet_grey_mzohop.png' className='amenity-icon-index'/>;
    const tableIcon = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437517/table_lsfpje.png' className='amenity-icon-index'/>;
    const tableIconGray = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437524/table_grey_cvk3pi.png' className='amenity-icon-index'/>;
    const petsIcon = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437534/pets_fhzzch.png' className='amenity-icon-index'/>;
    const petsIconGray = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437559/pets_grey_pdzwdy.png' className='amenity-icon-index'/>;
    const fireIcon = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437765/campfire_i39m8j.png' className='amenity-icon-index'/>;
    const fireIconGray = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437770/campfire_grey_g1rrtn.png' className='amenity-icon-index'/>;
    const waterIcon = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437780/water_or1au9.png' className='amenity-icon-index'/>;
    const waterIconGray = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437783/water_grey_axqdzl.png' className='amenity-icon-index'/>;
    const eclipseIcon = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437924/eclipse_ppg1ia.png' className='amenity-icon-index'/>;
    const eclipseIconGray = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437928/eclipse_grey_vgfzlk.png' className='amenity-icon-index'/>;

    return(
      <div className='filter-form-box'>
        <div className="filter-form">
          <div className={this.props.site.amenities['drinking_water'] ? 'site-amenity-true' : 'site-amenity-false'}>
            { this.props.site.amenities['drinking_water'] ? waterIcon : waterIconGray }
          </div>
          <div className={this.props.site.amenities['toilet'] ? 'site-amenity-true' : 'site-amenity-false'}>
            { this.props.site.amenities['toilet'] ? toiletIcon : toiletIconGray }
          </div>
          <div className={this.props.site.amenities['picnic_table'] ? 'site-amenity-true' : 'site-amenity-false'}>
            {this.props.site.amenities['picnic_table'] ? tableIcon : tableIconGray}
          </div>
          <div className={this.props.site.amenities['fire_ring'] ? 'site-amenity-true' : 'site-amenity-false'}>
            { this.props.site.amenities['fire_ring'] ? fireIcon : fireIconGray }
          </div>
          <div className={this.props.site.amenities['pets_allowed'] ? 'site-amenity-true' : 'site-amenity-false'}>
            { this.props.site.amenities['pets_allowed'] ? petsIcon : petsIconGray }
          </div>
          <div className={ this.props.site.amenities['shower'] ? "site-amenity-true" : "site-amenity-false" }>
            { this.props.site.amenities['shower'] ? showerIcon : showerIconGray }
          </div>
          <div className={ this.props.site['eclipse'] ? "site-amenity-true" : "site-amenity-false" }
            onClick={e  => this.props.updateFilter('eclipse', !this.props.site['eclipse'])}>
            { this.props.site['eclipse'] ? eclipseIcon : eclipseIconGray }
          </div>
        </div>
      </div>
    );
  }
}

export default SiteAmenities;
