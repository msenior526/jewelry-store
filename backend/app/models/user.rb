class User < ApplicationRecord
    has_many :jewelry_products
    has_many :shopping_carts
    has_secure_password

    validates :username, uniqueness: true, presence: true, length: {in: 4..12}
end
