class AddUsersToJewelryProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :jewelry_products, :user_id, :integer
  end
end
