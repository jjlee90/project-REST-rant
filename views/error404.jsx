const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/error.jpg" alt="error" className='error'/>
                    </div>
               <div>
                Photo by <a href="https://unsplash.com/@mahdibafande">Mahdi Bafande</a> on <a href="https://unsplash.com/photos/qgJ1rt7TeeY">Unsplash</a>
               </div>
            </main>
        </Def>
    )
}

module.exports = error404