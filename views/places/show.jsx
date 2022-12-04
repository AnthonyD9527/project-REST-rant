const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className='inactive'>
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className='inactive'>
      Not Yet Rated
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <div className="row">
              <div className="col-sm-6">
                <img src={data.place.pic} alt={data.place.name} />
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
              </div>
              <div className="col-sm-6">
                <h1>{ data.place.name }</h1>
                <h2>
                  Rating
                </h2>
                <h3 className="inactive">
                  Not Rated
                </h3>
                <br />
                <h2>
                  Description
                </h2>
                <h3>
                  {data.place.showEstablished()}
                </h3>
                <h4>
                  Serving {data.place.cuisines}
                </h4>
                <br />
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                  Edit
                </a>{` `}
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>
              </div>
            


            <hr />
            <h2>Comments</h2>
            {comments}
            <h3 className="inactive">
              No comments yet!
            </h3>
            <form method='POST' action={'/places/$data.place.id}/comment'}>
              <div className='form-group'>
                <label htmlFor='content'>content</label>
                <input className='form-control' id='content' name='content' required />
              </div>
              <div className='form-group'>
                <label htmlFor='author'>author</label>
                <input className='form-control' id='author' name='author' required />
              </div>
              <div className="form-group">
              <label htmlForr="stars">star rating</label>
              <input type="number" className="form-control" id="stars" min={0.5} max={5} name="stars" step={0.5} value={5} />
                </div>
                <div className="form-group">
                  <label htmlFor="rant">Rant?</label>
                  <input className="form-control" id="rant" name="rant" type="checkbox" value={true} />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment"/>
              
            </form>
            



            
            </div>
          </main>
        </Def>
    )
}

module.exports = show