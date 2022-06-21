const React = require("react");
const Def = require("../default");
import { BsFillStarFill } from "react-icons/bs";
const reactStar = BsFillStarFill();

function show(data) {
  console.log("show" + data.place.cuisines);
  let comments = <h3 className="inactive">No comments yet!</h3>;
  let rating = <h3 className="inactive">Not yet rated </h3>;

  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);

    let averageRating = Math.round(sumRatings / data.place.comments.length);
    let stars = 0;

    for (let i = 0; i < averageRating; i++) {
      stars += 1;
    }

    rating = (
      <h3>
        <span className="reactStar">
          {Array.from({ length: stars }, () => reactStar)}
        </span>
        stars
      </h3>
    );

    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! " : "Rave!"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>

          <form
            method="POST"
            action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}
          >
            <input
              type="submit"
              className="btn btn-danger"
              value="Delete Comment"
            />
          </form>
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
            {rating}
            <br />

            <h2 className="sectionHead">Description</h2>

            <h5>{data.place.showEstablished()}</h5>
            <h4>Serving {data.place.cuisines}</h4>
            <div className="row justify-content-center my-4">
              <a
                href={`/places/${data.place.id}/edit`}
                className="btn btn-warning mr-2"
              >
                Edit
              </a>

              <form
                method="POST"
                action={`/places/${data.place.id}?_method=DELETE`}
              >
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
          <div>
            <h1>Add a Comment</h1>

            <form method="POST" action={`/places/${data.place.id}/comment`}>
              <label htmlFor="author">Author</label>
              <input type="text" name="author" id="author" />

              <label htmlFor="content">Content</label>
              <input type="textarea" name="content" id="content" />

              <label htmlFor="stars">Rating</label>
              <input type="number" name="stars" id="stars" min="1" max="5" />

              <label htmlFor="rant">Rant</label>
              <input type="checkbox" name="rant" id="rant" />

              <input type="submit" value="Add Comment" />
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
