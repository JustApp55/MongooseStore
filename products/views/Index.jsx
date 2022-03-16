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
             <title>Product Index Page</title>
             </head>
             <body  style={{backgroundImage: 'url()'}} >
             <link rel="stylesheet" href="/css/app.css"/>

                <div style={{textTransform: 'capitalize'}}>
                <nav style={{fontSize: 'xx-large'}}>
                <h1 style={{color: '#f72585'}}>Trendyn Łyn</h1>
                </nav> 
                {/* <nav style={{fontSize: 'large'}}> */}
                    <a href="/products/new" style={{color: '#b5179e'}} >Create A New Product</a>
              {/* </nav> <br/> */}
               <ul>
                   {
                       this.props.products.map((product, i)=>{
                           return(
                               <li key={i} style={{padding: '25px 170px 25px'}}> 
                                   <a href={`/products/${ product.id }`}> { product.name }</a> <br/> <br/>
                                   <a href={`/products/${ product.id}`}> <img src={product.img} style={{height:'150px', width: '150px'}}/> </a> <br/>
                                    Price: ${product.price} <br/>
                                    Qty: {product.qty}
                                    <br/><br/>
                                 
                                  
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