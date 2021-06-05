class CreateUserCart < ActiveRecord::Migration[6.1]
  def change
    create_table :user_carts do |t|
      t.references :users
      t.references :shopping_carts
      t.timestamps
    end
  end
end
