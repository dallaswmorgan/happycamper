class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :site_id, null: false
      t.integer :rating, null: false
      t.string :body

      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :site_id
  end
end
