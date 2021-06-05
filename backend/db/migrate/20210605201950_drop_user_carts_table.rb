class DropUserCartsTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :user_carts
  end
end
