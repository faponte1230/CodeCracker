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

ActiveRecord::Schema[7.0].define(version: 2024_07_25_000230) do
  create_table "hard_codes", force: :cascade do |t|
    t.integer "digit1"
    t.integer "digit2"
    t.integer "digit3"
    t.integer "digit4"
    t.integer "digit5"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "medium_codes", force: :cascade do |t|
    t.integer "digit1"
    t.integer "digit2"
    t.integer "digit3"
    t.integer "digit4"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", force: :cascade do |t|
    t.integer "attempts"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "secret_codes", force: :cascade do |t|
    t.integer "digit1"
    t.integer "digit2"
    t.integer "digit3"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
