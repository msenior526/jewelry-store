class ShoppingCartSerializer
  include JSONAPI::Serializer
  attributes :id, :user_id, :jewelry_product_ids 
end
