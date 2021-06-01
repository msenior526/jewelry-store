class CreateJewelryProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :jewelry_products do |t|
      t.string :name,
      t.string :font_family,
      t.string :size,
      t.string :metal_type,
      t.integer :quantity,
      t.references :cart,
      t.timestamps
    end
  end
end
