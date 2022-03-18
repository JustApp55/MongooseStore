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
app.use('/products', require('./controllers/routeController.js')); // Mounts our RESTFUL/INDUCES ROUTES at /products

app.get('/', (req, res)=>{
    res.redirect('/products') 
})



// Listen on PORT
app.listen(PORT, () => {
  console.log('We are connected', PORT)
})











































