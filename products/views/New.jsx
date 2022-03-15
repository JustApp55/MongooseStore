const React = require('react')

class New extends React.Component {
    render () {
        return (
            <div>
        <link rel="stylesheet" href="/css/app.css"/>
    <h1>New Product Page</h1>
    {/* NOTE: action will be the route, method will be the HTTP verb */}
    <form action="/products" method="POST">
      Name: <input type="text" name="name" /><br/>
      Description: <input type="text" name="description" /><br/>
      Image URL: <input type="text" name="img" /><br/>
      Price: <input type="number" name="price" /><br/>
      Qty: <input type="number" name="quantity" /><br/>
                <br/>
      <input type="submit" name="" value="Create Product"/>
    </form>
    </div>
        )
    }
        
    
}

module.exports = New
