class CreateSites < ActiveRecord::Migration[5.0]
  def change
    create_table :sites do |t|
      t.string :name, null: false
      t.text :description
      t.integer :user_id, null: false
      t.integer :region_id, null: false
      t.boolean :featured, null: false, default: false
      t.boolean :public, null: false, default: false
      t.string :state, null: false
      t.string :city, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :price, null: false
      t.integer :guest_limit, null: false

      t.timestamps
    end
    add_index :sites, :region_id
  end
end
