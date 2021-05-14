import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';


export default function CircularIndeterminate() {
  return (
    <Grid item xs={12}>
        <Grid container justify="center" spacing={2} >
            <Grid item>
                <CircularProgress />
            </Grid>
        </Grid>
    </Grid>
  );
}