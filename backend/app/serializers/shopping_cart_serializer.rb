class ShoppingCartSerializer
  include JSONAPI::Serializer
  belongs_to :user
  has_many :jewelry_products
end
