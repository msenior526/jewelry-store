class ShoppingCart < ApplicationRecord
    belongs_to :user
    has_many :jewelry_products
    validates_associated :jewelry_products
end
