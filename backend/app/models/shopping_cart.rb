class ShoppingCart < ApplicationRecord
    has_many :jewelry_products
    validate_associated :jewelry_products
end
