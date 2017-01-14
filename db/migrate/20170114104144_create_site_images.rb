class CreateSiteImages < ActiveRecord::Migration[5.0]
  def change
    create_table :site_images do |t|
      t.integer :site_id, null: false
      t.string :url, null: false
      t.string :caption
      t.timestamps
    end
    add_index :site_images, :site_id
  end
end
