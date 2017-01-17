export const fetchReservations = (success) => {
  $.ajax({
    method: 'GET',
    url: '/api/reservations',
    success
  });
};

export const fetchReservation = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/reservations/${id}`,
    success
  });
};

export const createReservation = (reservation, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/reservations',
    data: { reservation },
    success,
    error
  });
};

export const updateReservation = (reservation, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/reservations/${reservation.id}`,
    data: { reservation },
    success,
    error
  });
};

export const deleteReservation = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/reservations/${id}`,
    success
  });
};
