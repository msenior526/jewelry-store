# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "mariah101920", password: "123456")
User.create(username: "matteo101920", password: "123456")

3.times do
    JewelryProduct.create(
        name: Faker::Name.first_name, 
        font_family: Faker::FunnyName.name,
        size: "#{Faker::Number.between(from: 5, to: 20)}",
        metal_type: "yellow gold",
        jewelry_type: "necklace", 
        user_id: 1
    )
end

3.times do
    JewelryProduct.create(
        name: Faker::Name.first_name, 
        font_family: Faker::FunnyName.name,
        size: "#{Faker::Number.between(from: 5, to: 20)}",
        metal_type: "silver",
        jewelry_type: "ring",
        user_id: 2
    )
end

3.times do
    JewelryProduct.create(
        name: Faker::Name.first_name, 
        font_family: Faker::FunnyName.name,
        size: "#{Faker::Number.between(from: 5, to: 20)}",
        metal_type:  "rose gold",
        jewelry_type: "bracelet",
        user_id: 1
    )
end

3.times do
    JewelryProduct.create(
        name: Faker::Name.first_name, 
        font_family: Faker::FunnyName.name,
        size: "#{Faker::Number.between(from: 5, to: 20)}",
        metal_type: "white gold",
        jewelry_type: "necklace",
        user_id: 2
    )
end