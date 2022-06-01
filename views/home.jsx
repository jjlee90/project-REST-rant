const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <div>
                    <img src="/images/tacos.jpg" alt="Tacos" className='tacos'/>
                    </div>
               <div>
                Photo by <a href="https://unsplash.com/@spencerdavis">Spencer Davis</a> on <a href="https://unsplash.com/photos/k4oQYuUTE9A">Unsplash</a>
               </div>
 
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}
    


module.exports = home