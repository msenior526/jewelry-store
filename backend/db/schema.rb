# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_14_160916) do

  create_table "jewelry_products", force: :cascade do |t|
    t.string "name"
    t.string "font_family"
    t.string "size"
    t.string "metal_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "jewelry_type"
    t.float "price"
    t.integer "user_id"
    t.index ["user_id"], name: "index_jewelry_products_on_user_id"
  end

  create_table "product_carts", force: :cascade do |t|
    t.integer "jewelry_product_id"
    t.integer "shopping_cart_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["jewelry_product_id"], name: "index_product_carts_on_jewelry_product_id"
    t.index ["shopping_cart_id"], name: "index_product_carts_on_shopping_cart_id"
  end

  create_table "shopping_carts", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id", null: false
    t.index ["user_id"], name: "index_shopping_carts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
  end

  add_foreign_key "shopping_carts", "users"
end
