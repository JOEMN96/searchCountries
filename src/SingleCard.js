import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    margin: "20px auto",
    padding: "10px",
  },
});

export default function SingleCard({ capital, flag, name, population }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={flag}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <div className="des">
            <Typography variant="body2" color="textSecondary" component="p">
              Population: {population}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Capital:{capital}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
