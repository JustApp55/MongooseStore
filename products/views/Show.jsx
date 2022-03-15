const React = require('react')

class Show extends React.Component {
    render() {
        const product = this.props.product
        return (
            <html lang="en">
             <head>
             <meta charset="UTF-8" />
             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
             <title>Product-Łyn</title>
             </head>
             <body  style={{backgroundImage: 'url()'}} >
                
                <div style={{textTransform: 'capitalize'}}>
                  <h1>Product  Łyn</h1>
                    { this.props.product.name }: ${ this.props.product.price } <br/>
                    { this.props.product.description } 
                    <br/> <br/> 
                  <img src={`${product.img}.jpg`} style={{borderRadius: '25px'}}></img>
                    <br/><br/>
                    <a href={`/products/${product._id}/edit`}>Edit This Product</a> 
                    <br/>
                  <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                         <input type="submit" value="DELETE"/>
                  </form>
                        <br/>
                    <a href='/products'>Back</a>
                </div>
             </body>
            </html>   
        )
    }
}

module.exports  = Show