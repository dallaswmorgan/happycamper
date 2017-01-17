class CreateSiteAmenities < ActiveRecord::Migration[5.0]
  def change
    create_table :site_amenities do |t|
      t.integer :site_id, null: false
      t.boolean :drinking_water
      t.boolean :shower
      t.boolean :fire_ring
      t.boolean :pets_allowed
      t.boolean :toilet
      t.boolean :picnic_table
      t.timestamps
    end
    add_index :site_amenities, :site_id
  end
end
