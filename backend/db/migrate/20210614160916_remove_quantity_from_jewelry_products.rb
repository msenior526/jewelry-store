class RemoveQuantityFromJewelryProducts < ActiveRecord::Migration[6.1]
  def change
    remove_column :jewelry_products, :quantity
  end
end
