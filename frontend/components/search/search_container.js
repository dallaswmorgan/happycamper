import Search from './search';
import { fetchSites } from '../../actions/site_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return({
    sites: state.sites
  });
};


const mapDispatchToProps = dispatch => ({
  fetchSites: filter => dispatch(fetchSites(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
