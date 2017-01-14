import { connect } from 'react-redux';
import Site from './site_show';
import { fetchSite } from '../../actions/site_actions';
// import {selectSite } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  const siteId = parseInt(ownProps.params.id);
  const site = state.sites[siteId];
  return ({
    site
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSite: id => dispatch(fetchSite(id))
});
//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Site);
