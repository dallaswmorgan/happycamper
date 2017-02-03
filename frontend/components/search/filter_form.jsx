import React from 'react';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleFilter(amenity) {
    this.props.updateFilter(amenity, !this.props.filters[amenity]);
  }

  render() {
    const updateFilter = this.props.updateFilter;
    return(
      <div className="filter-form">
        <button width="100px" height="100px" value="Click me" onClick={e  => updateFilter('amenities', {picnic_table: !this.state.filters.picnic_table})}>Picnic</button>
        <button width="100px" height="100px" value="Click me" onClick={e  => updateFilter('eclipse', true)}>Eclipse</button>
      </div>
    );
  }
}

export default FilterForm;
