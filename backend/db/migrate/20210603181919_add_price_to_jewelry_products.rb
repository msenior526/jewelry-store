class AddPriceToJewelryProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :jewelry_products, :price, :float
  end
end
