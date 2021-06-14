class JewelryProduct < ApplicationRecord
    belongs_to :user
    has_many :product_carts
    has_many :shopping_carts, through: :product_carts
    
    validates :font_family, :size, presence: true
    validates :name, presence: true, length: {maximum: 8}
    validates :metal_type, inclusion: {in: ["yellow gold", "silver", "rose gold", "white gold"]}
    validates :jewelry_type, inclusion: {in: ["necklace", "ring", "bracelet"]}

    def calculate_price
        new_price = 0
        if ((self.metal_type == 'yellow gold' || self.metal_type == 'white gold') && self.jewelry_type == 'necklace')
                new_price = 150.00
        elsif (self.metal_type == 'rose gold' && self.jewelry_type == 'necklace')
                new_price = 140.00 
        elsif (self.metal_type == 'silver' && self.jewelry_type == 'necklace')
                new_price = 125.00 
        
        elsif ((self.metal_type == 'yellow gold' || self.metal_type == 'white gold') && self.jewelry_type == 'bracelet')
                new_price = 100.00 
        elsif (self.metal_type == 'rose gold' && self.jewelry_type == 'bracelet')
                new_price = 90.00 
        elsif (self.metal_type == 'silver' && self.jewelry_type == 'bracelet')
                new_price = 75.00 
 
        elsif ((self.metal_type == 'yellow gold' || self.metal_type == 'white gold') && self.jewelry_type == 'ring')
                new_price = 100.00 
        elsif (self.metal_type == 'rose gold' && self.jewelry_type == 'ring')
                new_price = 90.00 
        elsif (self.metal_type == 'silver' && self.jewelry_type == 'ring')
                new_price = 75.00 
        end 
        return new_price
    end

    def price
        self.price = calculate_price
    end
end
