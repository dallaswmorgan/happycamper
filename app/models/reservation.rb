class Reservation < ApplicationRecord
  validates :site, :user, :check_in_date, :check_out_date, :number_of_guests, presence: true
  validates :check_in_date, :check_out_date, overlap: { scope: 'site_id',message_content: 'Site has already been booked. Please choose other dates' }
  validate :check_out_date_is_after_check_in_date, on: :create

  belongs_to :user
  belongs_to :site

  def check_out_date_is_after_check_in_date()
    return if check_out_date.blank? || check_in_date.blank?
    if check_out_date < check_in_date
      errors.add(:check_out_date, "cannot be before the check in date")
    end
  end
end
