import React from 'react';

class SiteAmenities extends React.Component {
  constructor(props) {
    super(props);
  }
  // TODO: DRY this up
  render() {
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
    let instructions = <div></div>
    let onClick;
    if (this.props.currentUser.id === this.props.site.user_id ) {
      instructions = <h3 className='amenity-instructions'>Click icons below to update your site's amenities</h3>;
      onClick = e => this.props.updateAmenity();
    }
    const amenities = this.props.site.amenities
    if (this.props.currentUser.id !== this.props.site.user_id ) {
      return(
        <div className='filter-form-box'>
          {instructions}
          <div className="filter-form">
            <div className={this.props.site.amenities['drinking_water'] ? 'site-amenity-true' : 'site-amenity-false'}>
              { this.props.site.amenities['drinking_water'] ? waterIcon : waterIconGray }
              Drinking Water
            </div>
            <div className={this.props.site.amenities['toilet'] ? 'site-amenity-true' : 'site-amenity-false'}>
              { this.props.site.amenities['toilet'] ? toiletIcon : toiletIconGray }
              Toilet
            </div>
            <div className={this.props.site.amenities['picnic_table'] ? 'site-amenity-true' : 'site-amenity-false'}>
              {this.props.site.amenities['picnic_table'] ? tableIcon : tableIconGray}
              Picnic Table
            </div>
            <div className={this.props.site.amenities['fire_ring'] ? 'site-amenity-true' : 'site-amenity-false'}>
              { this.props.site.amenities['fire_ring'] ? fireIcon : fireIconGray }
              Fire Ring
            </div>
            <div className={this.props.site.amenities['pets_allowed'] ? 'site-amenity-true' : 'site-amenity-false'}>
              { this.props.site.amenities['pets_allowed'] ? petsIcon : petsIconGray }
              Pet Friendly
            </div>
            <div className={ this.props.site.amenities['shower'] ? "site-amenity-true" : "site-amenity-false" }>
              { this.props.site.amenities['shower'] ? showerIcon : showerIconGray }
              Shower
            </div>
            <div className={ this.props.site['eclipse'] ? "site-amenity-true" : "site-amenity-false" }>
              { this.props.site['eclipse'] ? eclipseIcon : eclipseIconGray }
              Eclipse 2017
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div className='filter-form-box'>
          {instructions}
          <div className="filter-form">
            <div className={this.props.site.amenities['drinking_water'] ? 'site-amenity-true-clickable' : 'site-amenity-false-clickable'}
              onClick={e => this.props.updateAmenity({id: amenities.id, site_id: this.props.site.id, drinking_water: !amenities.drinking_water })}>
              { this.props.site.amenities['drinking_water'] ? waterIcon : waterIconGray }
              Drinking Water
            </div>
            <div className={this.props.site.amenities['toilet'] ? 'site-amenity-true-clickable' : 'site-amenity-false-clickable'}
              onClick={e => this.props.updateAmenity({id: amenities.id, site_id: this.props.site.id, toilet: !amenities.toilet })}>
              { this.props.site.amenities['toilet'] ? toiletIcon : toiletIconGray }
              Toilet
            </div>
            <div className={this.props.site.amenities['picnic_table'] ? 'site-amenity-true-clickable' : 'site-amenity-false-clickable'}
              onClick={e => this.props.updateAmenity({id: amenities.id, site_id: this.props.site.id, picnic_table: !amenities.picnic_table })}>
              {this.props.site.amenities['picnic_table'] ? tableIcon : tableIconGray}
              Picnic Table
            </div>
            <div className={this.props.site.amenities['fire_ring'] ? 'site-amenity-true-clickable' : 'site-amenity-false-clickable'}
              onClick={e => this.props.updateAmenity({id: amenities.id, site_id: this.props.site.id, fire_ring: !amenities.fire_ring })}>
              { this.props.site.amenities['fire_ring'] ? fireIcon : fireIconGray }
              Fire Ring
            </div>
            <div className={this.props.site.amenities['pets_allowed'] ? 'site-amenity-true-clickable' : 'site-amenity-false-clickable'}
              onClick={e => this.props.updateAmenity({id: amenities.id, site_id: this.props.site.id, pets_allowed: !amenities.pets_allowed })}>
              { this.props.site.amenities['pets_allowed'] ? petsIcon : petsIconGray }
              Pet Friendly
            </div>
            <div className={ this.props.site.amenities['shower'] ? "site-amenity-true-clickable" : "site-amenity-false-clickable" }
              onClick={e => this.props.updateAmenity({id: amenities.id, site_id: this.props.site.id, shower: !amenities.shower })}>
              { this.props.site.amenities['shower'] ? showerIcon : showerIconGray }
              Shower
            </div>
            <div className={ this.props.site['eclipse'] ? "site-amenity-true" : "site-amenity-false" }>
              { this.props.site['eclipse'] ? eclipseIcon : eclipseIconGray }
              Eclipse 2017
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SiteAmenities;
