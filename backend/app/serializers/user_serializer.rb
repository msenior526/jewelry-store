class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :username, :shopping_carts, :jewelry_product_ids

end
