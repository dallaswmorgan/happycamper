import { connect } from 'react-redux';
import { createSite, updateSite, deleteSite } from '../../actions/site_actions';
import SiteForm from './site_form';

const mapStateToProps = state => {
  console.log(state.session.currentUser);
  return({
      currentUser: state.session.currentUser,
      loggedIn: Boolean(state.session.currentUser)
  });
};

const mapDispatchToProps = dispatch => ({
  createSite: site => dispatch(createSite(site)),
  updateSite: site => dispatch(updateSite(site))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteForm);
