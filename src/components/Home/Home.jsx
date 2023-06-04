import { React, useState, useEffect } from "react";
const usaUrl =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=5a192647a0f84adfbc20be2adb9c8fcc";
const ukUrl =
  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5a192647a0f84adfbc20be2adb9c8fcc";

const Home = () => {
  const [url, seturl] = useState(ukUrl);
  const [countery, setcountery] = useState({});
  const [showSearchInput, setShowSearchInput] = useState(false);

  const [posts, setposts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(url);
        const userJsonData = await userResponse.json();
        setposts(userJsonData.articles);
        setcountery(userJsonData.articles.map((article) => article.source));

        console.log(posts);
        console.log(countery);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
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
                  <a className="nav-link" href="/Categories">
                    Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    // href=""
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

      {/* Start Posts */}
      <div className="container mt-4">
        {countery.length > 0 && <h1>Top News From {countery[0].name}</h1>}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {posts.map((postData) => {
            const { title, id, description, urlToImage } = postData;
            return (
              <div className="col">
                <div className="card">
                  <h5 className="m-2 card-title ">{title}</h5>
                  <img src={urlToImage} className="" alt="..." height={200} />
                  <div className="card-body">
                    <p className="card-text">{description}</p>
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* End Posts */}
    </div>
  );
};

export default Home;
