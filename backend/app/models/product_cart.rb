class ProductCart < ApplicationRecord
    has_many :jewelry_products
    has_many :shopping_carts
end