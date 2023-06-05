import React from "react";
import { useLocation } from "react-router-dom";
const PostFullView = ( ) => {
  const location = useLocation();
  const { postData } = location.state;
  
  return (
    <div>
      
      <div className="conatiner">
          <div className="card mb-3">
            <h5 className="card-title">{postData.title}</h5>
            <img src={postData.urlToImage} className="img-fluid " alt="..." width={800}/>
            <div className="card-body">
              <p className="card-text">{postData.content}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
      </div>
    
    </div>
  );
};

export default PostFullView;
