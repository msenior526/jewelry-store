class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :username, :shopping_cart_ids, :jewelry_product_ids

end
