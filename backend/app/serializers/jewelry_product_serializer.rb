class JewelryProductSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :size, :jewelry_type, :metal_type, :price, :quantity
  
  belongs_to :shopping_cart

end
