class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :fname, :lname, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  after_initialize :ensure_session_token

  has_many :reservations


  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bc_obj = BCrypt::Password.new(self.password_digest)
    bc_obj.is_password?(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
