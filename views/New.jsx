const React = require('react')

class New extends React.Component {
    render () {
        return (
            <body id="url">
           <link rel="stylesheet" href="/css/app.css"/>

     <div>

        

    <h1 id="heada">List New Item</h1>
    <br/><br/><br/>
    
    {/* NOTE: action will be the route, method will be the HTTP verb */}
    <form action="/products" method="POST">
    <div id="can">
      Name: <input type="text" name="name" /><br/>
      Description: <input type="text" name="description" /><br/>
      Image URL: <input type="text" name="img" /><br/>
      Price: $<input type="number" name="price" step="0.01" min="0" /><br/>
      Quantity: <input type="number" name="qty" min="0"/><br/>
      </div>
                <br/>
        <nav id="below">
         <input type="submit" name="" value="Create Product"/>
        </nav>
    </form>
    
    </div>
    </body>
        )
    }
        
    
}

module.exports = New
