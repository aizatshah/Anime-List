import { useRef, useState } from "react";
import MainContent from "../components/MainContent";
import Pagination from "../components/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { AppBar } from "@mui/material";
import { Typography, Toolbar, Box } from "@mui/material";

function SearchPage() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [animePerPage] = useState(10);
  const timeout = useRef();

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("handle search");
    clearTimeout(timeout.current);
    // console.log(search);

    timeout.current = setTimeout(fetchAnime(search), 250);
    // fetchAnime(search);
  };

  const fetchAnime = (query) => {
    if (query === "") {
      setAnimeList([]);
      return;
    }

    fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title`
    ).then(async (response) => {
      if (!response.ok) {
        console.log("Something went wrong....");
      } else {
        const data = await response.json();
        console.log(data.results);
        setAnimeList(data.results);
      }
    });
  };

  //get current list
  const indexOfLastPost = currentPage * animePerPage;
  const indexOfFirstPost = indexOfLastPost - animePerPage;
  const currentAnimeList = animeList.slice(indexOfFirstPost, indexOfLastPost);

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h3" color="inherit" noWrap>
            Anime List
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <MainContent
          handleSearch={handleSearch}
          setSearch={setSearch}
          search={search}
          animeList={currentAnimeList}
        />
        <Box>
          {animeList.length !== 0 ? (
            <Pagination
              animePerPage={animePerPage}
              totalAnime={animeList.length}
              paginate={paginate}
            />
          ) : null}
          {/* <Pagination
            animePerPage={animePerPage}
            totalAnime={animeList.length}
            paginate={paginate}
          /> */}
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default SearchPage;
