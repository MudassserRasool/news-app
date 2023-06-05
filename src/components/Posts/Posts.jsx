import React from 'react';
import { NavLink } from 'react-router-dom';

const Posts = ({ countery, posts }) => {

  return (
    <div>
      {/* Start Posts */}
      <div className="container mt-4">
        {countery.length > 0 && <h1>Top News From {countery[0].name}</h1>}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {posts.map((postData) => {
            const { title, id, description, urlToImage } = postData;
            return (
              <div className="col" key={id}>
                <div className="card">
                  <h5 className="m-2 card-title ">{title}</h5>
                  <img src={urlToImage} className="" alt="..." height={200} />
                  <div className="card-body">
                    <p className="card-text">{description}</p>
                    <NavLink to={{ pathname: "/full-view" }} state={{postData}}  className=""                      
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
