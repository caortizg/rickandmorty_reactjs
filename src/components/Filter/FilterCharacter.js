import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    control: {
        padding: theme.spacing(1),
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
}));

const FilterCharacter = (props) => {
    const classes = useStyles();
    const {onChange,value,onSearch} = props;

    function handleOnClick(){
        onSearch(value);
    }

    return (
        <Grid item xs={12}>
            <Grid container justify="center" spacing={2} className={classes.control}>
                <Grid item>
                    <Paper >
                        <InputBase
                            className={classes.input}
                            placeholder="Buscar..."
                            inputProps={{ 'aria-label': 'Buscar...' }}
                            onChange={onChange}
                            value={value}
                        />
                        <IconButton type="button" className={classes.iconButton} aria-label="search" onClick={handleOnClick}>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default FilterCharacter;