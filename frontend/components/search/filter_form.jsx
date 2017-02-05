import React from 'react';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const updateFilter = this.props.updateFilter
    console.log(this.props.filters.amenities['toilet']);
    return(
      <div className="filter-form">
        <button className={ this.props.filters['eclipse'] ? "selected" : "unselected" }
          onClick={e  => this.props.updateFilter('eclipse', !this.props.filters['eclipse'])}>
          Eclipse
        </button>
        <button className={ this.props.filters.amenities['picnic_table'] ? "selected" : "unselected" }
          onClick={e  => this.props.updateFilter('amenities', { picnic_table: !this.props.filters.amenities['picnic_table']})}>
          Picnic Table
        </button>
        <button className={ this.props.filters.amenities['drinking_water'] ? "selected" : "unselected" }
          onClick={e  => this.props.updateFilter('amenities', { drinking_water: !this.props.filters.amenities['drinking_water']})}>
          Drinking Water
        </button>
        <button className={ this.props.filters.amenities['shower'] ? "selected" : "unselected" }
          onClick={e  => this.props.updateFilter('amenities', { shower: !this.props.filters.amenities['shower']})}>
          Shower
        </button>
        <button className={ this.props.filters.amenities['pets_allowed'] ? "selected" : "unselected" }
          onClick={e  => this.props.updateFilter('amenities', { pets_allowed: !this.props.filters.amenities['pets_allowed']})}>
          Pet Friendly
        </button>
        <button className={ this.props.filters.amenities['fire_ring'] ? "selected" : "unselected" }
          onClick={e  => this.props.updateFilter('amenities', { fire_ring: !this.props.filters.amenities['fire_ring']})}>
          Fire Ring
        </button>
        <button className={ this.props.filters.amenities['toilet'] ? "selected" : "unselected" }
          onClick={e  => this.props.updateFilter('amenities', { toilet: !this.props.filters.amenities['toilet']})}>
          Toilet
        </button>
      </div>
    );
  }
}

export default FilterForm;
