import { connect } from 'react-redux';
import Site from './site_show';
import { fetchSite, createImage } from '../../actions/site_actions';
import { fetchReviews } from '../../actions/reviews_actions';
import { createReservation, receiveReservationErrors } from '../../actions/reservations_actions';

const mapStateToProps = (state, ownProps) => {
  const siteId = parseInt(ownProps.params.id);
  const site = state.sites[siteId];
  const errors = state.reservations.errors;
  const currentUser = state.session.currentUser;
  return ({
    site,
    siteId,
    errors,
    currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSite: id => dispatch(fetchSite(id)),
  createReservation: reservation => dispatch(createReservation(reservation)),
  createImage: image => dispatch(createImage(image)),
  clearErrors: () => dispatch(receiveReservationErrors([])),
  fetchReviews: siteId => dispatch(fetchReviews(siteId))
});
//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Site);
