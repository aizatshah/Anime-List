import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
  Stack,
  AppBar,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

function SingleAnime() {
  const { id } = useParams();
  const [singleAnime, setSingleAnime] = useState([]);

  const GetSingleAnime = async () => {
    const temp = await axios.get(`https://api.jikan.moe/v3/anime/${id}`);
    console.log(temp.data);
    setSingleAnime(temp.data);
  };

  // console.log(singleAnime);

  useEffect(() => {
    GetSingleAnime();
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Typography variant="h3" color="inherit" component="div">
          {singleAnime.title}
        </Typography>
      </AppBar>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 360, display: { xs: "none", sm: "block" } }}
              image={singleAnime.image_url}
              alt={singleAnime.title}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h5" variant="h5" padding={1}>
                Synopsis
              </Typography>
              <Typography component="p" variant="p" padding={2}>
                {singleAnime.synopsis}
              </Typography>
              <Container maxWidth="md" padding={2}>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  marginTop={5}
                >
                  <Item>
                    <div>
                      <h3>{singleAnime.score}</h3>
                      <p>{singleAnime.scored_by}</p>
                    </div>
                  </Item>
                  <Item>
                    <div>
                      <h3># {singleAnime.rank}</h3>
                      <p>Ranked</p>
                    </div>
                  </Item>
                  <Item>
                    <div>
                      <h3>{singleAnime.popularity}</h3>
                      <p>Popularity</p>
                    </div>
                  </Item>
                  <Item>
                    <div>
                      <h3>{singleAnime.members}</h3>
                      <p>Members</p>
                    </div>
                  </Item>
                </Stack>
              </Container>
            </CardContent>
          </Card>
          <Button variant="contained">
            <Link to="./">Back</Link>
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default SingleAnime;
