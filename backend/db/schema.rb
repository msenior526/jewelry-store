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

ActiveRecord::Schema.define(version: 2021_06_05_201449) do

  create_table "jewelry_products", force: :cascade do |t|
    t.string "name"
    t.string "font_family"
    t.string "size"
    t.string "metal_type"
    t.integer "quantity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "jewelry_type"
    t.float "price"
    t.integer "user_id"
    t.index ["user_id"], name: "index_jewelry_products_on_user_id"
  end

  create_table "product_carts", force: :cascade do |t|
    t.integer "jewelry_products_id"
    t.integer "shopping_carts_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["jewelry_products_id"], name: "index_product_carts_on_jewelry_products_id"
    t.index ["shopping_carts_id"], name: "index_product_carts_on_shopping_carts_id"
  end

  create_table "shopping_carts", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id", null: false
    t.index ["user_id"], name: "index_shopping_carts_on_user_id"
  end

  create_table "user_carts", force: :cascade do |t|
    t.integer "users_id"
    t.integer "shopping_carts_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["shopping_carts_id"], name: "index_user_carts_on_shopping_carts_id"
    t.index ["users_id"], name: "index_user_carts_on_users_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "shopping_carts", "users"
end
