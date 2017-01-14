import FeaturedSite from './featured_site';
import { connect } from 'react-redux';
import {fetchFeaturedSites} from '../../actions/site_actions';

const mapStateToProps = state => ({
  sites: Object.keys(state.sites).map( id => (state.sites[id]))
});

const mapDispatchToProps = dispatch => ({
  fetchFeaturedSites: () => dispatch(fetchFeaturedSites())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedSite);
