class AddJewelryTypeToJewelryProducts < ActiveRecord::Migration[6.1] 
    def change
        add_column :jewelry_products, :jewelry_type, :string
    end
end