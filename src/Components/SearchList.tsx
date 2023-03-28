import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./SearchList.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

interface SearchList {}

function SearchList(props: any) {
  const [loading, setloading] = useState(10);
  let increment=0;
  const fetchMoreData = () => {
    setTimeout(() => {
      setloading(loading + 10);
    }, 1000);
  };
  return (
    <InfiniteScroll
      dataLength={loading}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="cards">
        
        {props.resultList.slice(0, loading).map((obj: any) => {
          var milliseconds = new Date().getTime();
          increment =increment++ + loading;
          console.log(increment)
          return (
            <div className="dataListing" >
              <List key={obj.collectionId +obj.artistId + loading + Date.now() + increment +4}>
                <a href={obj.previewUrl}>
                  <img src={obj.artworkUrl100} className="images" />
                </a>
                <ListItem disablePadding key={increment +1}>
                  {" "}
                  <ListItemText
                    primary={obj.artistName}
                    className="artistNames"
                  />
                </ListItem>

                <ListItem disablePadding key={increment +2}>
                  {" "}
                  <ListItemText primary={obj.kind} className="kinds" />
                </ListItem>
                <ListItem disablePadding key={increment +3}>
                  {" "}
                  <ListItemText primary={obj.collectionName} className="collectionName" />
                </ListItem>
                <a href={obj.previewUrl} className="links">
                  <ListItem disablePadding>
                    {" "}
                    <ListItemText
                      className="links"
                      primary="Play in full screen"
                    />
                  </ListItem>
                </a>
              </List>
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
}

export default SearchList;
