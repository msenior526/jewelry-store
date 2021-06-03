class ChangeJewelryProducts < ActiveRecord::Migration[6.1]
  def change
    change_table :jewelry_products do |t|
    t.remove :cart_id, :user_id
    t.references :user
    t.references :cart
    end
  end
end
