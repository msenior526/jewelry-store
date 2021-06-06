class ShoppingCart < ApplicationRecord
    belongs_to :user
    has_many :product_carts
    has_many :jewelry_products, through: :product_carts
end
