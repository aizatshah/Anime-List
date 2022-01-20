import React from "react";
import AnimeCard from "./AnimeCard";

import {
  Container,
  InputLabel,
  OutlinedInput,
  FormControl,
  Box,
  Grid,
} from "@mui/material";

function MainContent(props) {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <FormControl fullWidth sx={{ m: 1 }} onChange={props.handleSearch}>
            <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={props.search}
              onChange={(e) => props.setSearch(e.target.value)}
              label="Amount"
            />
          </FormControl>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {props.animeList.map((anime) => {
            return <AnimeCard anime={anime} key={anime.mal_id} />;
          })}
        </Grid>
      </Container>
    </div>

    // <main>
    //   <div className="main-head">
    //     <form className="search-box" onChange={props.handleSearch}>
    //       <input
    //         type="search"
    //         placeholder="search..."
    //         required
    //         value={props.search}
    //         onChange={(e) => props.setSearch(e.target.value)}
    //       />
    //     </form>
    //   </div>
    //   <div className="anime-list">
    //     {props.animeList.map((anime) => {
    //       return <AnimeCard anime={anime} key={anime.mal_id} />;
    //     })}
    //   </div>
    // </main>
  );
}

export default MainContent;
