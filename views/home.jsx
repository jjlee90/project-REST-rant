const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <div>
            <img
              src="/images/restaurant.jpg"
              alt="restaurant"
              className="restaurant-img"
            />
          </div>
          <div>
            Photo by{" "}
            <a href="https://unsplash.com/@simonkaremann">Simon Karemann</a> on{" "}
            <a href="https://unsplash.com/photos/p85-MG66GRY">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
