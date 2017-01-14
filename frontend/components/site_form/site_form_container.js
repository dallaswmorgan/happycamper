import { connect } from 'react-redux';
import { createSite, updateSite, deleteSite } from '../../actions/site_actions';
import SiteForm from './site_form';

const mapStateToProps = state => ({
  sites: Object.keys(state.sites).map( id => (state.sites[id]))
});

const mapDispatchToProps = dispatch => ({
  createSite: site => dispatch(createSite(site)),
  updateSite: site => dispatch(updateSite(site)),
  deleteSite: id => dispatch(deleteSite(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteForm);
