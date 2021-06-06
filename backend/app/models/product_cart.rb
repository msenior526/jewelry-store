class ProductCart < ApplicationRecord
    belongs_to :jewelry_product
    belongs_to :shopping_cart
end