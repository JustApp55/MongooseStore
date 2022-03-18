require('dotenv').config()  
const Product = require('./models/products.js')
const mongoose = require('mongoose')
const db = require('./models/db')

const productSeed = [
    {
        name: 'Iriza Plume',
                description: 'Leather Brown Ballet Flats: (Sz US 7.5)',
                img: 'https://img-static.tradesy.com/item/30209967/christian-louboutin-brown-iriza-plume-studded-flats-size-eu-37-approx-us-7-narrow-aa-n-0-0-650-650.jpg',
                price: $550,
                qty: 3
            }, {
                name: 'Valentino Garavani Rockstud',
                description: 'Black Leather Ankle Boots: (Sz US 7)',
                img: 'https://img.shopstyle-cdn.com/sim/25/d8/25d8587f083a4c9dadcca94ddcfa2521_best/valentino-garavani-rockstud-ankle-boots',
                price: 900,
                qty: 5
            }, {
                name: 'YSL Kate Crok Bag',
                description: 'YSL | Kate Croc Embossed Belt/Crossbody Bag',
                img: 'https://cdn3.boutique.humbleandrich.com/wp-content/uploads/2018/01/10071518/Saint-Laurent-Sunset-Medium-Croc-Effect-Leather-Shoulder-Bag',
                price: $1000,
                qty: 2
            }, {
                name: 'Gucci Mens Black Sneaker',
                description: 'Gucci Mens Black Falacer Sneaker New: (Sz. US 6.5)',
                img: 'https://img-static.tradesy.com/item/28792400/gucci-black-men-s-519723-guccy-falacer-leather-sneakers-size-us-65-regular-m-b-0-0-650-650',
                price: $500,
                qty: 3
            }, {
                name: 'Draper James Stars Dress',
                description: 'Draper James | Oh My Stars Love Circle Dress: (Sz. 6)',
                img: 'https://pc-ap.renttherunway.com/productimages/nomodel/1080x/59/DJ29',
                price: $2000,
                qty: 4
            }, {
                name: 'YSL Small Loulou Matelassé Bag',
                description: 'YSL | Small Loulou Matelassé Leather Shoulder Bag',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuTckBwRCHY1uIs1jCT8Y2urgUHOiG9BO5w&usqp=CAU',
                price: $1500,
                qty: 3
            }, {
                name: 'Loubishark Womens Sneakers',
                description: 'Loubishark Leather Low-Top Sneakers: (Sz. US 7.5)',
                img: 'https://image.s5a.com/is/image/saks/0400013906254_A1?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
                price: $900,
                qty: 1
            }, {
                name: 'Seavaste Orlato Sneakers',
                description: 'Seavaste 2 Orlato Low-Top Sneakers: (Sz. US 8)',
                img: 'https://image.s5a.com/is/image/saks/0400013942822_VERSIONWHITE?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
                price: $700,
                qty: 6
}
]

const product = async ()=> {
    await Product.insertMany(seedProducts)
}
seed().then(() =>{
    db.close()
})