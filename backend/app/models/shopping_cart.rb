class ShoppingCart < ApplicationRecord
    has_many :jewelry_products
    validates_associated :jewelry_products
end
