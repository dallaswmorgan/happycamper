class Api::ReservationsController < ApplicationController
  def index
    @reservations = current_user.reservations
  end

  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user = current_user
    if @reservation.save
      render 'api/reservations/show'
    elsif !current_user
      render(json: ["Must be logged in to reserve site"], status: 404)
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def update
    @reservation = current_user.reservations.find(params[:id])

    if @reservation.update(reservation_params)
      render 'api/reservations/show'
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def destroy
    @reservation = reservation.find(params[:id])
    @reservation.destroy
    render 'api/reservations/show'
  end

  private

  def reservation_params
    params.require(:reservation).permit(:site_id, :check_in_date, :check_out_date, :number_of_guests)
  end
end
