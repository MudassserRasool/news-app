import { React, useState, useEffect } from "react";

import Navbar from '../Navbar/Navbar'
import Posts from '../Posts/Posts'
import PostFullView from '../PostFullView/PostFullView'
const usaUrl ="https://newsapi.org/v2/top-headlines?country=us&apiKey=5a192647a0f84adfbc20be2adb9c8fcc";
const ukUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5a192647a0f84adfbc20be2adb9c8fcc";
const Home = () => {
  const [url, seturl] = useState(ukUrl);
  const [countery, setcountery] = useState({});
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchInputValue, setsearchInputValue] = useState("");

  const [originalPosts, setOriginalPosts] = useState([]);
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(url);
        const userJsonData = await userResponse.json();
        const fetchedPosts = userJsonData.articles;
        setOriginalPosts(fetchedPosts);
        setposts(fetchedPosts);
        setcountery(fetchedPosts.map((article) => article.source));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setsearchInputValue(inputValue);

    if (inputValue === "") {
      setposts(originalPosts);
    } else {
      // Filter the posts based on the input value
      const filteredPosts = originalPosts.filter((article) =>
        article.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setposts(filteredPosts);
    }
  };

  return (
    <div>
      <Navbar
        showSearchInput={showSearchInput}
        setShowSearchInput={setShowSearchInput}
        usaUrl={usaUrl}
        ukUrl={ukUrl}
        searchInputValue={searchInputValue}
        handleInput={handleInput}
        seturl={seturl}
      />
      <Posts countery={countery} posts={posts} />
    </div>
  );
};


export default Home