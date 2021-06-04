class JewelryProduct {
    static all = []
    constructor(name, price, jewelry_type, metal_type) {
        this.name = name,
        this.price = price,
        this.metal_type = metal_type,
        this.jewelry_type = jewelry_type,
        JewelryProduct.all.push(this)

    }

   static display() {
   }
}
