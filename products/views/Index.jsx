const React = require('react')

class Index extends React.Component {
    render() {
        const {product} = this.props;

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
                <h1>Products Index Page</h1>
                <br/>
              <nav style={{fontSize: 'large'}}>
                    <a href="/products/new" style={{color: 'green'}} >Create A New Product!</a>
              </nav>

                



                </div>
             </body>
            </html>
        )
    }
}


module.exports = Index