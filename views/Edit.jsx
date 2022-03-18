const React = require('react')

class Edit extends React.Component{
    render() {
      return (
  
       
       
        <body id="style" >
        <link rel="stylesheet" href="/css/app.css"/> 

          <div style={{textTransform: 'capitalize'}}>
          <nav  style={{padding: '25px 70px 0'}}>
        {/* <DefaultLayout title="Edit Page">      */}

        <h1 id="edd">Edìt Pagë</h1>
        <br/><br/><br/>
        
       {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
            {/* form is not complete we will do that below*/}
        
            <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">    
          <div id="kul">
            Name: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>
            Description: <input type="text" name="description" defaultValue={this.props.product.description} /><br/>
            Image URL: <input type="text" name="img" defaultValue={this.props.product.img} /><br/>
            Price: $<input type="number" name="price"  step="0.01" min="0" defaultValue= {this.props.product.price} /><br/>
            Quantity: <input type="number" name="qty" min="0" defaultValue={this.props.product.qty} /><br/>
                <br/>
          </div>

          <div id="high">
            <input type="submit" value="Submit Changes"/>
          </div>
        </form>
         
                                                                                    
        {/* </DefaultLayout> */}
        </nav>
        </div>
        </body>
     
      )
      
    }
  }
  
  
  module.exports= Edit;