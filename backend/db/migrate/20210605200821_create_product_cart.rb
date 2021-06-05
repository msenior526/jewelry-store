class CreateProductCart < ActiveRecord::Migration[6.1]
  def change
    create_table :product_carts do |t|
      t.references :jewelry_products
      t.references :shopping_carts
      t.timestamps
    end
  end
end
