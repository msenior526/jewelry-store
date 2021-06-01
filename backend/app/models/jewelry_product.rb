class JewelryProduct < ApplicationRecord
    validates :font_family, :size, presence: true
    validates :name, presence: true, length: {maximum: 8}
    validates :quantity, numericality: true
    validates :metal_type, inclusion: {in: ["gold", "silver", "rose gold", "white gold"]}
end
