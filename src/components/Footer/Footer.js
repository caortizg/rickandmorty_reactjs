import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    flexGrow: 1,
    color: "#9e9e9e",
    backgroundColor: "#202329",
    paddingBlock: 50,
    paddingInline: 20,
  },
  spanName: {
    color: "#f5f5f5",
  },
}));


export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
            <Grid container justify="center">
                <Grid item>❮❯ by <span className={classes.spanName}>Carlos A. Ortiz</span> 2021</Grid>
            </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

