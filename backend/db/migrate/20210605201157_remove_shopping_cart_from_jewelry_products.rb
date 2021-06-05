class RemoveShoppingCartFromJewelryProducts < ActiveRecord::Migration[6.1]
  def change
    change_table :jewelry_products do |t|
      t.remove :shopping_cart_id
    end
  end
end
