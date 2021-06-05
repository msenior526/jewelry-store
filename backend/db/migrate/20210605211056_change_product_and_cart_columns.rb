class ChangeProductAndCartColumns < ActiveRecord::Migration[6.1]
  def change
    change_table :product_carts do |t|
      t.rename :shopping_carts_id, :shopping_cart_id
      t.rename :jewelry_products_id, :jewelry_product_id
    end
  end
end
