class JewelryProductSerializer
  include JSONAPI::Serializer
  attributes :name, :size, :jewelry_type, :metal_type
end
