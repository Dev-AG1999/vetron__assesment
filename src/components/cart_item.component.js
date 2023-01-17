import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { truncate } from "../utils/truncate";
import { Button } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function CartItem({
  onCartClick,
  title,
  thumbnail,
  description,
  brand,
  discountPercentage,
  price,
  rating
}) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: "90%",
        flexGrow: 1,
        marginBottom: 3,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#F5F2EF",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={thumbnail} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {brand}
              </Typography>
            </Grid>
            <Grid item>
              <Button onClick={onCartClick} size="small">
                - Remove from Cart
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div" fontWeight="bold">
              ₹{price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
