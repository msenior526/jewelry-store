class JewelryProduct < ApplicationRecord
    validates :font_family, :size, presence: true
    validates :name, presence: true, length: {maximum: 8}
    validates :quantity, numericality: true
    validates :metal_type, inclusion: {in: ["yellow gold", "silver", "rose gold", "white gold"]}
    validates :jewelry_type, inclusion: {in: ["necklace", "ring", "bracelet"]}
end
