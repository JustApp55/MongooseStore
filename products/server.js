require('dotenv').config()
// Import the express library here
const express = require('express')
const Product = require('./models/products.js')
const methodOverride = require('method-override')
//Instantiate the app here
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')

app.use((req, res, next)=>{
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))

app.set('view engine', 'jsx')
  app.engine('jsx', require('express-react-views').createEngine())



app.get('/products/seed', (req, res)=>{
    Product.create(
    [{
        name: '',
        description: '',
        img: '',
        price: 900,
        qty: 3
    }, {
        name: '',
        description: '',
        img: '',
        price: 1200,
        qty: 5
    }, {
        name: '',
        description: '',
        img: '',
        price: 1500,
        qty: 2
    }, {
        name: '',
        description: '',
        img: '',
        price: 500,
        qty: 3
    }, {
        name: '',
        description: '',
        img: '',
        price: 2000,
        qty: 1
    }

], (err, data)=>{
    res.redirect('/fruits')
})
})

// Index route
app.get('/products', (req, res)=>{
    Product.find({}, (err, allProducts)=>{
        res.render('Index', {products: allProducts})
    })
})





mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

app.listen(PORT, ()=> {
    console.log('listening on port', PORT)
})
