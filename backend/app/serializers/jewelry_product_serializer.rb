class JewelryProductSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :size, :jewelry_type, :metal_type, :price, :quantity, :shopping_cart

end
