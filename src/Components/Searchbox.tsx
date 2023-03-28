import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import { $CombinedState } from "redux";
import axios from "axios";
import SearchList from "./SearchList";
import "./Searchbox.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { connect, ConnectedProps } from 'react-redux'


function Searchbox() {
  const [list, setlist] = useState<any>([]);
  const [searchAlbum, setSearchAlbum] = useState("");
  const [noResults, setnoResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const state = {
    isLoading: false
   }

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
// typeof searchAlbum == "undefined" || searchAlbum == null || 
  const url =
    "https://itunes.apple.com/search?term=" +
   (searchAlbum ==""
      ? "jack+johnson"
      : searchAlbum);
      console.log("1"+searchAlbum+"2")
  async function fetchData() {
    // const response = await fetch(url);
    // const json = await response.json();
    // setlist(json.results);
    // setnoResults(true);
    //   await fetch(url).then((response) => {
    //     if (response.status >= 400 && response.status < 600) {
    //       throw new Error("Bad response from server");
    //     }
    //     return response;
    // }).then((returnedResponse) => {
    //    // Your response to manipulate
    //    setlist(returnedResponse);
    //     setnoResults(true);
    // }).catch((error) => {
    //   // Your error is here!
    //   console.log(error)
    // });
  }

  return (
    <div className="Searchbox">
       {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box> */}
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          mb: "15px",
          mt: "20px",
          ml: "25%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 700,
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Album/Artist"
          value={searchAlbum}
          onChange={(e) => setSearchAlbum(e.target.value)} inputProps={{ minLength: 3 }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => {
            const headers = {
              "Content-Type": "text/plain",
            };
            setIsLoading(true);
            //fetchData();
            //setState(prevState => ({ isLoading: !prevState.isLoading }));
            if(searchAlbum ==""){
               
              setlist([]);
              setnoResults(true);
              setIsLoading(false);
            }
            else{ 
            axios.get(url).then((response) => {
              setlist(response.data.results);
              if (response.data.results.length === 0) {
                setnoResults(true);
                setIsLoading(false);

              } else {
                setnoResults(false);
                setIsLoading(false);
              }
              
              //setState(prevState => ({isLoading: !prevState.isLoading,}));
              console.log(response.data.results);
              <Box sx={{ display: "none", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
            });
          }
          }}
        >
          <SearchIcon />
        </IconButton>
        <CloseIcon
          sx={{ height: 28, m: 0.5 }}
          orientation="vertical"
          onClick={() => setSearchAlbum("")}
        />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
        ></IconButton>
        {isLoading && <CircularProgress variant="determinate" size="10rem" style={{'color': 'yellow'}} /> }
      </Paper>

      {list.length > 0 ? (
       
        <SearchList resultList={list} inputValue={searchAlbum} />
      ) : (
        ""
      )}

      {noResults ? (
        <h2 className="noResult">'Sorry, no results found!'</h2>
      ) : (
        ""
      )}
       {isLoading && <CircularProgress variant="determinate" size="10rem"  color="secondary" /> }
    </div>
  );
}

export default Searchbox;
