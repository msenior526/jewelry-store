class ChangeUsersTable < ActiveRecord::Migration[6.1]
  def change
    change_table :users do |t|
      t.rename :name, :username
    end
  end
end
