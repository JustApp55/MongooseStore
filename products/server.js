// Import Modules and set up vars
require('dotenv').config()
// Import the express library here
const express = require('express');
const methodOverride = require('method-override');
//Instantiate the app here
const app = express();
const PORT = process.env.PORT || 3000;

//connect to database
const db = require('./models/db')
db.once('open', () => {
  console.log('connected to mongo')
})

//Initialize View Engine routes
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

// Mount Express Middleware
app.use((req, res, next) => {
  res.locals.data = {}
  next()
}) 

// Creates res.locals.data
app.use(express.urlencoded({ extended: true })) // Creates req.body
app.use(methodOverride('_method')); // Allows us to override methods
app.use(express.static('public')); // Allows us to have Static Files
app.use('/products', require('./controllers/routeController.js')); // Mounts our RESTFUL/INDUCES ROUTES at /fruits

app.get('/', (req, res)=>{
    res.redirect('/products')
})



// Listen on PORT
app.listen(PORT, () => {
  console.log('We are connected', PORT)
})

















//model: structure 
//veiw: presentation
//view engine: what pushes the data for ppl to see it
//controller: the place where we keep all the route...handles all the highways and byways of the paths
//middleware: the request of the response cycle








// require('dotenv').config()
// // Import the express library here
// const express = require('express')
// const Product = require('./models/products.js')
// const methodOverride = require('method-override')
// //Instantiate the app here
// const app = express()
// const PORT = process.env.PORT || 3000
// const mongoose = require('mongoose')

// app.use((req, res, next)=>{
//     console.log('I run for all routes')
//     next()
// })

// app.use(express.urlencoded({extended:true}))
// app.use(methodOverride('_method'))
// app.use(express.static('public'))

// app.set('view engine', 'jsx')
//   app.engine('jsx', require('express-react-views').createEngine())



// app.get('/products/seed', (req, res)=>{
//     Product.create(
//     [{
//         name: 'Iriza Plume',
//         description: 'Leather Brown Ballet Flats: (Sz US 7.5)',
//         img: 'https://img-static.tradesy.com/item/30886396/dior-blackgold-walk-n-dior-mizza-embroidered-cotton-low-sneakers-size-eu-38-approx-us-8-regular-m-b-0-1-650-650',
//         price: $550,
//         qty: 3
//     }, {
//         name: 'Valentino Garavani Rockstud',
//         description: 'Black Leather Ankle Boots: (Sz US 7)',
//         img: 'https://img.shopstyle-cdn.com/sim/25/d8/25d8587f083a4c9dadcca94ddcfa2521_best/valentino-garavani-rockstud-ankle-boots',
//         price: 900,
//         qty: 5
//     }, {
//         name: 'YSL Kate Crok Bag',
//         description: 'YSL | Kate Croc Embossed Belt/Crossbody Bag',
//         img: 'https://cdn3.boutique.humbleandrich.com/wp-content/uploads/2018/01/10071518/Saint-Laurent-Sunset-Medium-Croc-Effect-Leather-Shoulder-Bag',
//         price: $1000,
//         qty: 2
//     }, {
//         name: 'Gucci Mens Black Sneaker',
//         description: 'Gucci Mens Black Falacer Sneaker New: (Sz. US 6.5)',
//         img: 'https://img-static.tradesy.com/item/28792400/gucci-black-men-s-519723-guccy-falacer-leather-sneakers-size-us-65-regular-m-b-0-0-650-650',
//         price: $500,
//         qty: 3
//     }, {
//         name: 'Draper James Stars Dress',
//         description: 'Draper James | Oh My Stars Love Circle Dress: (Sz. 6)',
//         img: 'https://pc-ap.renttherunway.com/productimages/nomodel/1080x/59/DJ29',
//         price: $2000,
//         qty: 4
//     }, {
//         name: 'YSL Small Loulou Matelassé Bag',
//         description: 'YSL | Small Loulou Matelassé Leather Shoulder Bag',
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuTckBwRCHY1uIs1jCT8Y2urgUHOiG9BO5w&usqp=CAU',
//         price: $1500,
//         qty: 3
//     }, {
//         name: 'Loubishark Womens Sneakers',
//         description: 'Loubishark Leather Low-Top Sneakers: (Sz. US 7.5)',
//         img: 'https://image.s5a.com/is/image/saks/0400013906254_A1?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
//         price: $900,
//         qty: 1
//     }, {
//         name: 'Seavaste Orlato Sneakers',
//         description: 'Seavaste 2 Orlato Low-Top Sneakers: (Sz. US 8)',
//         img: 'https://image.s5a.com/is/image/saks/0400013942822_VERSIONWHITE?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
//         price: $700,
//         qty: 6
//     }

// ], (err, data)=>{
//     res.redirect('/products')
// })
// })

// // Index route
// app.get('/products', (req, res)=>{
//     Product.find({}, (err, allProducts)=>{
//         res.render('Index', {products: allProducts})
//     })
// })




// //new product page
// app.get('/products/new', (req, res)=>{
//     res.render('New')
// })

// //form Post
// app.post('/products', (req, res)=>{
//     Product.create(req.body, (err, createdProducts)=>{
//         res.redirect('/products') //send user back to index page 
//     })
// })

// //GET: Show route
// app.get('/products/:id', (req, res)=>{
//     Product.findById(req.params.id, (err, foundProduct)=>{
//         res.render('Show', {
//             product:foundProduct
//         })
//     })
// })

// app.get('/products/:id/edit', (req, res)=>{
//     //getting form, prepopulated to edit product
//     Product.findById(req.params.id, (err, foundProduct)=>{
//         if(!err){
//             res.render(
//                 'Edit', {
//                     product: foundProduct //pass in found product
//                 }
//             )
//         } else {
//             res.send ({msg: err.message})
//         }
//     })
// })



// app.delete('/products/:id', (req, res)=>{
//     Product.findByIdAndRemove(req.params.id, (err, data)=>{
//         res.render('Show')
//     })
// })



// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', ()=> {
//     console.log('connected to mongo')
// })

// app.listen(PORT, ()=> {
//     console.log('listening on port', PORT)
// })
