import FeaturedSite from './featured_site';
import { connect } from 'react-redux';
import {fetchFeaturedSites} from '../../actions/site_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  sites: Object.keys(state.sites).map( id => (state.sites[id]))
});

const mapDispatchToProps = dispatch => ({
  fetchFeaturedSites: () => dispatch(fetchFeaturedSites()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedSite);
