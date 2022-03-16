const React = require('react')

class New extends React.Component {
    render () {
        return (
            <body style={{backgroundImage: 'url()'}}>
           
            <div>
                 <nav  style={{padding: '25px 70px 0'}}>
        <link rel="stylesheet" href="public/css/app.css"/>
    <h1 style={{fontSize: 'xx-large'}}>List New Item</h1>
    <br/><br/><br/>
    {/* NOTE: action will be the route, method will be the HTTP verb */}
    <form action="/products" method="POST">
      Name: <input type="text" name="name" /><br/>
      Description: <input type="text" name="description" /><br/>
      Image URL: <input type="text" name="img" /><br/>
      Price: $<input type="number" name="price" step="0.01" min="0" /><br/>
      Quantity: <input type="number" name="qty" min="0"/><br/>
                <br/>
      <input type="submit" name="" value="Create Product"/>
    </form>
    </nav>
    </div>
    </body>
        )
    }
        
    
}

module.exports = New
