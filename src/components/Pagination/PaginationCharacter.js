
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    control: {
        padding: theme.spacing(1),
    },
}));

const CharacterPagination = (props) => {
    const classes = useStyles();
    const {pages,page,onChange} = props;
    return (
        <Grid item xs={12}>
            <Grid container justify="center" spacing={2} className={classes.control}>
                <Paper>
                    <Grid container>
                        <Grid item>
                            <Pagination 
                                count={pages} 
                                page={page}
                                onChange={onChange}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default CharacterPagination;