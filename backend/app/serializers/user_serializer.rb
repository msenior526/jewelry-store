class UserSerializer
  include JSONAPI::Serializer
  attributes :username, :shopping_cart_ids

end
