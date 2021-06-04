class JewelryProductSerializer
  include JSONAPI::Serializer
  attributes :name, :size, :jewelry_type, :metal_type

  belongs_to :shopping_cart
end
