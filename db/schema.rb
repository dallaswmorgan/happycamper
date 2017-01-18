# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170118182429) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reservations", force: :cascade do |t|
    t.integer  "site_id",          null: false
    t.integer  "user_id",          null: false
    t.date     "check_in_date",    null: false
    t.date     "check_out_date",   null: false
    t.integer  "number_of_guests", null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["site_id"], name: "index_reservations_on_site_id", using: :btree
    t.index ["user_id"], name: "index_reservations_on_user_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "site_id",    null: false
    t.integer  "rating",     null: false
    t.string   "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["site_id"], name: "index_reviews_on_site_id", using: :btree
    t.index ["user_id"], name: "index_reviews_on_user_id", using: :btree
  end

  create_table "site_amenities", force: :cascade do |t|
    t.integer  "site_id",        null: false
    t.boolean  "drinking_water"
    t.boolean  "shower"
    t.boolean  "fire_ring"
    t.boolean  "pets_allowed"
    t.boolean  "toilet"
    t.boolean  "picnic_table"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["site_id"], name: "index_site_amenities_on_site_id", using: :btree
  end

  create_table "site_images", force: :cascade do |t|
    t.integer  "site_id",    null: false
    t.string   "url",        null: false
    t.string   "caption"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["site_id"], name: "index_site_images_on_site_id", using: :btree
  end

  create_table "sites", force: :cascade do |t|
    t.string   "name",                        null: false
    t.text     "description"
    t.integer  "user_id",                     null: false
    t.integer  "region_id",                   null: false
    t.boolean  "featured",    default: false, null: false
    t.boolean  "public",      default: false, null: false
    t.string   "state",                       null: false
    t.string   "city",                        null: false
    t.float    "lat",                         null: false
    t.float    "lng",                         null: false
    t.integer  "price",                       null: false
    t.integer  "guest_limit",                 null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.index ["region_id"], name: "index_sites_on_region_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "fname",           null: false
    t.string   "lname",           null: false
    t.string   "email",           null: false
    t.string   "image_url"
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
