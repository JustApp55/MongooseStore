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
             <body id="bodyS">
             <link rel="stylesheet" href="/css/app.css"/> 

             {/* style={{textTransform: 'capitalize'}} */}

                <div id="showd">
                
                  
                  <h1 id="bar">Show Pagë</h1>
                  <br/><br/><br/>

                  <nav id="cent">
                      <div id="showT">
                    Item: { this.props.product.name } <br/> 
                    Price: ${ this.props.product.price } <br/>
                    Description: { this.props.product.description } <br/> 
                    Quantity: { this.props.product.qty > 0 ? `${this.props.product.qty} (in stock)` : `(Out of Stock)`} 
                    </div>

                    <br/> <br/> 
                  <img src={this.props.product.img} style={{height:'500px', width: '500px'}}></img>
                  </nav>
                      <br/>
                

                      <nav id="btn">
                  <br/><br/><br/>
                    <a href={`/products/${this.props.product._id}/edit`}><button>Edit Product</button></a> 
                   
                    <br/>
                    <br/>
                  <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
                         <input type="submit" value="DEŁETĘ"/>
                  </form>
                      </nav>
                        <br/><br/>

                  <a href='/products'><button id="back">Home</button></a>
                            <br/><br/>

                  <form action={`/products/${this.props.product._id}?_method=PATCH`} method="POST">
                    { this.props.product.qty > 0 ? 
                    <input id="buy" type="submit" value="BUŸ - JustDoIt"/> : null }
                  </form> 
                     
                 
                    
                    

                </div>
                </body>
            </html> 
                )
               } 
            }
        



module.exports  = Show



