class ShoppingCartSerializer
  include JSONAPI::Serializer
  attributes :user_id, :jewelry_product_ids 
end
