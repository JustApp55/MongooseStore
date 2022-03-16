const React = require('react')

class Show extends React.Component {
    render() {
        return (
            <html lang="en">
             <head>
             <meta charset="UTF-8" />
             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
             <title>Product-Łyn</title>
             </head>
             <body  style={{backgroundImage: 'url()'}} >
             <link rel="stylesheet" href="public/css/app.css"/> 

                <div style={{textTransform: 'capitalize'}}>
                <nav style={{padding: '25px 70px 0'}}>
                  
                  <h1 style={{fontSize: 'xx-large'}}>Show Pagë</h1>
                  <br/><br/><br/>
                    Item: { this.props.product.name } <br/> Price: ${ this.props.product.price } <br/>
                    Description: { this.props.product.description } <br/> Quantity: { this.props.product.qty > 0 ? `${this.props.product.qty} (in stock)` : `(Out of Stock)`} 
                    <br/> <br/> 
                  <img src={this.props.product.img} style={{height:'300px', width: '300px'}}></img>
                    <br/>

                    
                  <form action={`/products/${this.props.product._id}?_method=PATCH`} method="POST">
                    { this.props.product.qty > 0 ? 
                    <input id="buy" type="submit" value="BUŸ - JústDøIt"/> : null }
                  </form> 
                


                  <br/><br/><br/>
                    <a href={`/products/${this.props.product._id}/edit`}><button>Edit Product</button></a> 
                   
                    <br/>
                    <br/>
                  <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
                         <input type="submit" value="DEŁETĘ"/>
                  </form>
                        <br/><br/><br/>
                 
                    <a href='/products'><button>Båçk</button></a>
                    </nav>
                </div>
                </body>
            </html> 
                )
               } 
            }
        



module.exports  = Show



