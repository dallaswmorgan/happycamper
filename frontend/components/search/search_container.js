import Search from './search';
import { fetchSites } from '../../actions/site_actions';
import { updateFilter } from '../../actions/filter_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  center: state.filters.center,
  sites: state.sites
});



const mapDispatchToProps = dispatch => ({
  fetchSites: filter => dispatch(fetchSites(filter)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
