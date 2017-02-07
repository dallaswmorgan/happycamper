import React from 'react';

class SiteAmenities extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    debugger;
    const showerIcon = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486436538/shower_wcey6f.png' className='amenity-icon'/>;
    const showerIconGray = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486436718/shower_grey_cyc3m6.png' className='amenity-icon'/>;
    const toiletIcon = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437392/toilet_h5uokl.png' className='amenity-icon'/>;
    const toiletIconGray = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437401/toilet_grey_mzohop.png' className='amenity-icon'/>;
    const tableIcon = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437517/table_lsfpje.png' className='amenity-icon'/>;
    const tableIconGray = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437524/table_grey_cvk3pi.png' className='amenity-icon'/>;
    const petsIcon = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437534/pets_fhzzch.png' className='amenity-icon'/>;
    const petsIconGray = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437559/pets_grey_pdzwdy.png' className='amenity-icon'/>;
    const fireIcon = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437765/campfire_i39m8j.png' className='amenity-icon'/>;
    const fireIconGray = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437770/campfire_grey_g1rrtn.png' className='amenity-icon'/>;
    const waterIcon = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437780/water_or1au9.png' className='amenity-icon'/>;
    const waterIconGray = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437783/water_grey_axqdzl.png' className='amenity-icon'/>;
    const eclipseIcon = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437924/eclipse_ppg1ia.png' className='amenity-icon'/>;
    const eclipseIconGray = <img src='https://res.cloudinary.com/dallaswmorgan/image/upload/v1486437928/eclipse_grey_vgfzlk.png' className='amenity-icon'/>;

    return(
      <div className='filter-form-box'>
        <div className="filter-form">
          <button className={ this.props.site.amenities['drinking_water'] ? "site-selected" : "site-unselected" }
            onClick={e  => this.props.updateFilter('amenities', { drinking_water: !this.props.site.amenities['drinking_water']})}>
            {waterIcon}
            Drinking Water
          </button>
          <button className={ this.props.site.amenities['toilet'] ? "site-selected" : "site-unselected" }
            onClick={e  => this.props.updateFilter('amenities', { toilet: !this.props.site.amenities['toilet']})}>
            {toiletIcon}
            Toilet
          </button>
          <button className={ this.props.site.amenities['picnic_table'] ? "site-selected" : "site-unselected" }
            onClick={e  => this.props.updateFilter('amenities', { picnic_table: !this.props.site.amenities['picnic_table']})}>
            {this.props.site.amenities['picnic_table'] ? tableIcon : tableIconGray}
            Picnic Table
          </button>
          <button className={ this.props.site.amenities['fire_ring'] ? "site-selected" : "site-unselected" }
            onClick={e  => this.props.updateFilter('amenities', { fire_ring: !this.props.site.amenities['fire_ring']})}>
            {fireIcon}
            Fire Ring
          </button>
          <button className={ this.props.site.amenities['pets_allowed'] ? "site-selected" : "site-unselected" }
            onClick={e  => this.props.updateFilter('amenities', { pets_allowed: !this.props.site.amenities['pets_allowed']})}>
            {petsIcon}
            Pet Friendly
          </button>
          <button className={ this.props.site.amenities['shower'] ? "site-selected" : "site-unselected" }
            onClick={e  => this.props.updateFilter('amenities', { shower: !this.props.site.amenities['shower']})}>
            {showerIcon}
            Shower
          </button>
          <button className={ this.props.site['eclipse'] ? "site-selected" : "site-unselected" }
            onClick={e  => this.props.updateFilter('eclipse', !this.props.site['eclipse'])}>
            {eclipseIcon}
            Eclipse 2017
          </button>
        </div>
      </div>
    );
  }
}

export default SiteAmenities;
