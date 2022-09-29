import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setSearch } from "./store";
import './Cards.css'
//IMPORT DESTRUCTURED STORE THUNKS LMFAO FUCK ME

const Search = () => {
  const [currentSearch, setCurrentSearch] = useState("");
  //   const [site, setSite] = useState('');
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state);
  console.log("search: ", currentSearch);
  console.log('redux store search: ',search)
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("search: ", currentSearch);
    // const str = `https://www.reddit.com/r/${search}&raw_json=1`;
    // const str = `https://www.reddit.com/r/${search}/hot.json?limit=60&raw_json=1&include_over_18=on`

    const str = `https://www.reddit.com/search.json?q=${currentSearch}&raw_json=1&sort=hot&limit=30&include_over_18=on`
    dispatch(setSearch(str));
    // handleSite(search);
  };

  //   const handleSite = async (search) => {
  //     const res = await axios.get(`https://www.reddit.com/r/${search}/hot/.json`);
  //     const data = res.data.data.children;
  //     console.log('res: ',res)
  //     if (!res) {
  //         console.log(' no response detected ')
  //     } else {
  //         console.log('data: ',data)
  //         setSite(data)
  //     }
  //   };

  const convert = (unix) => {
    let months_arr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let date = new Date(unix * 1000);
    let year = date.getFullYear();
    let month = months_arr[date.getMonth()];
    let day = date.getDate();
    return month + " " + day + ", " + year;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search a term on reddit:</label>
        <input
          placeholder="search?"
          value={currentSearch}
          onChange={(ev) => setCurrentSearch(ev.target.value)}
        />
        <button disabled={!currentSearch}>--Look for subreddit!--</button>
      </form>

      <ol>
        {search?.map((post) => {
          return (
            <li key={post.data.id} className='card'>
              {post.data.title}
              <br />
              <img
                className=".img"
                src={post.data.preview ? post.data.preview.images[0].source.url : post.data.thumbnail}
                alt="no source-img detected"
              />{" "}
              {<br />}
              <em>
                <small>
                  <strong>Source:</strong>{" "}
                  <a href={post.data.url}> {post.data.url}</a>
                </small>
              </em>{" "}
              {<br />}
              <small>Upvotes: {post.data.score}</small> {<br />}
              <small>Comments: {post.data.num_comments}</small> {<br />}
              <small> Date posted: {convert(post.data.created)}</small>
              {<br />}
              <small>
                <em>permalink: {post.data.permalink}</em>
              </small>
            </li>
          );
        })}
      </ol>

    </div>
  );
};

export default Search;
