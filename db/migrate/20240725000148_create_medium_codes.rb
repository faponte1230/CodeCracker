class CreateMediumCodes < ActiveRecord::Migration[7.0]
  def change
    create_table :medium_codes do |t|
      t.integer :digit1
      t.integer :digit2
      t.integer :digit3
      t.integer :digit4

      t.timestamps
    end
  end
end
