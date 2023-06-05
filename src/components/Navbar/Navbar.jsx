import React from "react";

const Navbar = ({
  showSearchInput,
  setShowSearchInput,
  usaUrl,
  ukUrl,
  searchInputValue,
  handleInput,
  seturl,
}) => {
  return (
    <div>
      {/* Start Navbar */}
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active "
                    aria-current="page"
                    href="/top-news"
                  >
                    Top News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/categories">
                    Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => setShowSearchInput(true)}
                  >
                    Search
                  </a>
                </li>
                {showSearchInput && (
                  <li className="nav-item">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                      value={searchInputValue}
                      onChange={handleInput}
                    />
                  </li>
                )}
              </ul>
              <span className="navbar-text">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autoComplete="off"
                    defaultChecked
                    onChange={() => seturl(ukUrl)}
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio1"
                  >
                    GB
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autoComplete="off"
                    onChange={() => seturl(usaUrl)}
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio2"
                  >
                    USA
                  </label>
                </div>
              </span>
            </div>
          </div>
        </nav>
      </div>
      {/* End Navbar */}
    </div>
  );
};

export default Navbar;
