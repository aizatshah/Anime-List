import React from "react";
import { Link } from "react-router-dom";
import { Card, Grid, CardMedia, CardContent, Typography } from "@mui/material";

function AnimeCard({ anime }) {
  return (
    <Grid item key={anime.mal_id} xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image={anime.image_url}
          alt={anime.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Link to={`./${anime.mal_id}`} className="link">
            <Typography gutterBottom variant="h5" component="h2">
              {anime.title}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default AnimeCard;
