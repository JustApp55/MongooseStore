const React = require('react')

class Index extends React.Component {
    render() {
        //const {product} = this.props;

        return (
            <html lang="en">
             <head>
             <meta charset="UTF-8" />
             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
             <title>ProductŁyn</title>
             </head>
             <body  style={{backgroundImage: 'url()'}} >
                
                <div style={{textTransform: 'capitalize'}}>
                <h1 style={{color: '#8ac926'}}>Products Index Page</h1>
                <br/>
              <nav style={{fontSize: 'x-large'}}>
                    <a href="/products/new" style={{color: '#2ec4b6'}} >Create A New Product</a>
              </nav> <br/>
               <ul>
                   {
                       this.props.products.map((product, i)=>{
                           return(
                               <li key={i}>
                                   <a href={`/products/${ product.id }`}>{ product.name }</a> <br/>
                                  Qty: { product.qty}
                                 
                                   {/* <a href={`/products/${ products.id}`}> </a> */}
                               </li>
                           )
                       }
                       )
                   }
               </ul>

                </div>
             </body>
            </html>
        )
    }
}


module.exports = Index