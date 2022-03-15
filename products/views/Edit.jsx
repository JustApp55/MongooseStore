class Edit extends React.Component{
    render() {
      return (
  
        <html lang="en">
        <head>
         <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Pokèmon</title>
        </head>
        <body  style={{backgroundImage: 'url(https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700946456.jpg)'}} >
          <div style={{color: 'white'}}>
          <nav  style={{padding: '25px 100px 0'}}>
        {/* <DefaultLayout title="Edit Page">      */}
        <link rel="stylesheet" href="/css/app.css"/> 
        
       {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
            {/* form is not complete we will do that below*/}
            <form action={`/product/${this.props.product_id}?_method=PUT`} method="POST">    
            Name: <input type="text" name="name" def/><br/>
            Description: <input type="text" name="description" defaultValue={this.props.product.name} /><br/>
            Image URL: <input type="text" name="img" defaultValue={this.props.product.name} /><br/>
            Price: <input type="number" name="price" defaultValue={this.props.product.name} /><br/>
            Qty: <input type="number" name="quantity" defaultValue={this.props.product.name} /><br/>
                <br/>
            <input type="submit" value="Submit Changes"/>
        </form>
                                                                                    
        {/* </DefaultLayout> */}
        </nav>
        </div>
        </body>
      </html>
      )
      
    }
  }
  
  
  module.exports= Edit;