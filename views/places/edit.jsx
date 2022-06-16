const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  return (
    <Def>
      <main>
        <h1>Edit place</h1>

        <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
          <div className="row">
            <div className="form-group col-sm-4">
              <label htmlFor="name">Place Name</label>
              <input
                className="form-control"
                name="name"
                id="name"
                defaultValue={data.place.name}
                required
              />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="pic">Place Picture</label>
              <input
                className="form-control"
                type="url"
                id="pic"
                name="pic"
                defaultValue={data.place.pic}
              />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="city">City</label>
              <input
                className="form-control"
                id="city"
                name="city"
                defaultValue={data.place.city}
              />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="state">State</label>
              <input
                className="form-control"
                id="state"
                name="state"
                defaultValue={data.place.state}
              />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="cuisines">Cuisines</label>
              <input
                className="form-control"
                name="cuisines"
                id="cuisines"
                defaultValue={data.place.cuisines}
                required
              />
            </div>

            <div className="form-group col-sm-4">
              <label htmlFor="founded">Founded</label>
              <input
                className="form-control"
                id="founded"
                name="founded"
                value={data.place.founded}
              />
            </div>
          </div>
          <input className="btn btn-primary" type="submit" value="Add Place" />
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
