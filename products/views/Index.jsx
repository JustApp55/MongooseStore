const React = require('react')

class Index extends React.Component {
    render() {

        return (
            <html lang="en">
             <head>
             <meta charset="UTF-8" />
             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
             <title>Product Index Page</title>
             </head>
             <body id="body">
             <link rel="stylesheet" href="/css/app.css"/>
             {/* style={{backgroundImage: 'url()'}}  */}

               <div id="zero">

                 <nav>
                    <h1 class="bam" >Trendyn WęäR</h1>
                 </nav> 
              

               <ul class="oneul" >
                   {
                       this.props.products.map((product, i)=>{
                           return(
                               <li key={i} class="twoli"> 
                                   <a class="text" href={`/products/${ product.id }`}> <nav class="text">{ product.name }</nav></a> <br/> <br/>
                                   <a href={`/products/${ product.id}`}> <img src={product.img} style={{height:'250px', width: '250px'}}/> </a> <br/>
                                    <nav class="text">Price: ${product.price} </nav> 
                                    <nav class="text">Qty: {product.qty}</nav> 
                                    <br/><br/>
                                 
                                  
                               </li>
                           )
                       }
                       )
                   }
               
               
              </ul>

               <nav  class="bot">
               <a href="/products/new" style={{color: '#b5179e'}}><button  class="bottom" >Create New Product</button></a>
              </nav>
                </div>
             </body>
            </html>
        )
    }
}


module.exports = Index























// style={{ display: 'flex', flexWrap: 'wrap'}}
  {/* style={{color: '#f72585'}} */}
    {/* style={{padding: '40px 50px 20px 0'}} */}
 {/* style={{textTransform: 'capitalize'}} */}