import React from 'react';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
  }
  //

  render() {
    const updateFilter = this.props.updateFilter;
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
        <h3>Filter Sites By:</h3>

        <div className="filter-form">
          <button className={ this.props.filters.amenities['drinking_water'] ? "selected" : "unselected" }
            onClick={e  => this.props.updateFilter('amenities', { drinking_water: !this.props.filters.amenities['drinking_water']})}>
            {waterIcon}
            Drinking Water
          </button>
          <button className={ this.props.filters.amenities['toilet'] ? "selected" : "unselected" }
            onClick={e  => this.props.updateFilter('amenities', { toilet: !this.props.filters.amenities['toilet']})}>
            {toiletIcon}
            Toilet
          </button>
          <button className={ this.props.filters.amenities['picnic_table'] ? "selected" : "unselected" }
            onClick={e  => this.props.updateFilter('amenities', { picnic_table: !this.props.filters.amenities['picnic_table']})}>
            {tableIcon}
            Picnic Table
          </button>
          <button className={ this.props.filters.amenities['fire_ring'] ? "selected" : "unselected" }
            onClick={e  => this.props.updateFilter('amenities', { fire_ring: !this.props.filters.amenities['fire_ring']})}>
            {fireIcon}
            Fire Ring
          </button>
          <button className={ this.props.filters.amenities['pets_allowed'] ? "selected" : "unselected" }
            onClick={e  => this.props.updateFilter('amenities', { pets_allowed: !this.props.filters.amenities['pets_allowed']})}>
            {petsIcon}
            Pet Friendly
          </button>
          <button className={ this.props.filters.amenities['shower'] ? "selected" : "unselected" }
            onClick={e  => this.props.updateFilter('amenities', { shower: !this.props.filters.amenities['shower']})}>
            {showerIcon}
            Shower
          </button>
          <button className={ this.props.filters['eclipse'] ? "selected" : "unselected" }
            onClick={e  => this.props.updateFilter('eclipse', !this.props.filters['eclipse'])}>
            {eclipseIcon}
            Eclipse 2017
          </button>
        </div>
      </div>
    );
  }
}

export default FilterForm;
