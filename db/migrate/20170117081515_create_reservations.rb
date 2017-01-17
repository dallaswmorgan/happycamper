class CreateReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :reservations do |t|
      t.integer :site_id, null: false
      t.integer :user_id, null: false
      t.date :check_in_date, null: false
      t.date :check_out_date, null: false
      t.integer :number_of_guests, null: false

      t.timestamps
    end
    add_index :reservations, :site_id
    add_index :reservations, :user_id
  end
end
