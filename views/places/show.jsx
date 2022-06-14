const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! " : "Rave!"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Raiting: {c.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <div className="container row align-items-center  mt-5 mx-auto">
          <div className="container col-md-6">
            <img
              src={data.place.pic}
              alt={data.place.name}
              className="editImg"
            />
            <h5>
              Located in {data.place.city}, {data.place.state}
            </h5>
          </div>

          <div className="container editSection col-md-6">
            <h1>{data.place.name}</h1>
            <h2 className="sectionHead">Rating</h2>
            <h5>Not Rated</h5>
            <h2 className="sectionHead">Description</h2>

            <h5>{data.place.showEstablished()}</h5>
            <h4>Serving {data.place.cuisines}</h4>
            <div className="row justify-content-center my-4">
              <a
                href={`/places/${data.id}/edit`}
                className="btn btn-warning mr-2"
              >
                Edit
              </a>

              <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="comments">
          <hr />
          <h2 className="sectionHead">Comments</h2>
          {comments}
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
