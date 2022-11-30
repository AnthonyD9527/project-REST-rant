const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
          <div>
            <img src='/images/pizza.jpg' alt='Pizza Picture' />
            <div> Photo by <a href='https://unsplash.com/photos/MQUqbmszGGM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'> Ivan Torres</a> on <a href='https://unsplash.com/s/photos/pizza'>Unsplash</a>
               </div>
          </div>

          <a href='/places'>
            <button className='btn-primary'>Places Page</button>
          </a>
          </main>
      </Def>
    )
  }
  
module.exports = home
