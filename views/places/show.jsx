const React = require("react");
const Def = require("../default");

function show(data) {
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
          </div>

          <div className="container editSection col-md-6">
            <h1>{data.place.name}</h1>
            <h2 className="sectionHead">Rating</h2>
            <h5>Not Rated</h5>
            <h2 className="sectionHead">Description</h2>
            <h5>
              Located in {data.place.state}, and serving {data.place.cuisines}
            </h5>

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
          <h5>No Comments yet!</h5>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
