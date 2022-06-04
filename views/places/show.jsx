const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <h3>Rating</h3>
        <p>Not Rated</p>
        <h3>Description</h3>
        <p>
          Located in {data.place.state}, and serving {data.place.cuisines}
        </p>
        <div>
          <h3>Comments</h3>
          <p>No Comments yet!</p>
        </div>

        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>

        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;