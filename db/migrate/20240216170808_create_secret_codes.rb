class CreateSecretCodes < ActiveRecord::Migration[7.0]
  def change
    create_table :secret_codes do |t|
      t.integer :digit1
      t.integer :digit2
      t.integer :digit3
      t.timestamps
    end
  end
end
