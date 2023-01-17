import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { truncate } from "../utils/truncate";

export default function CommonCard({
  id,
  title,
  category,
  description,
  thumbnail,
  price,
  rating,
  onCartClick,
  onViewClick
}) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 345,
        backgroundColor: "#F5F2EF",
        margin: 5,
      }}
      key={id}
    >
      <CardMedia sx={{ height: 140 }} image={thumbnail} title={title} />
      <CardContent>
        <Typography gutterBottom fontSize={16} component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="small" component="div">
          {category}
        </Typography>
        <Typography fontWeight='bold' variant="h5" color="text.secondary">
          ₹{price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onCartClick} size="small">
          + Add to Cart
        </Button>
        <Button onClick={onViewClick} size="small">
          View Product
        </Button>
      </CardActions>
    </Card>
  );
}
