import { connect } from 'react-redux';
import Site from './site_show';
import { fetchSite } from '../../actions/site_actions';
import { createReservation, receiveReservationErrors } from '../../actions/reservations_actions';

const mapStateToProps = (state, ownProps) => {
  const siteId = parseInt(ownProps.params.id);
  const site = state.sites[siteId];
  return ({
    site,
    siteId,
    errors: state.reservations.errors
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSite: id => dispatch(fetchSite(id)),
  createReservation: reservation => dispatch(createReservation(reservation)),
  clearErrors: () => dispatch(receiveReservationErrors([]))
});
//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Site);
