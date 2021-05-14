import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import bgImages, {dots1,dots2,dots3,dots4,dots5} from '../../backgroundImage'; 

const useStyles = makeStyles((theme) => ({
  header: {
    '&::before': {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      height: "calc(50vh - 40px)",
      width: "100%",
      backgroundColor: "rgba(0,0,0,.2)",
      backgroundImage: `url(${dots1})`,
    },
    fontSize: "5.625rem",
    flexGrow: 1,
    color: "#9e9e9e",
    backgroundColor: "#202329",
    backgroundPosition: "50%",
    backgroundImage: `url(${bgImages[7]})`,
    backgroundSize:  "cover",
    padding: 0,
    height: "calc(50vh - 20px)",
  },
  headerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    position: "relative",
    color: "#f5f5f5",
    height: "100%",
  },
  title: {
    textShadow: "1px 1px 8px rgb(0 0 0)"
  }
}));


export default function Header(props) {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Grid className={classes.headerContent} container direction="row" justify="center" alignItems="center" spacing={5}>
        <Grid item  className={classes.title}>The Rick and Morty</Grid>
      </Grid>
    </header>
  );
}

