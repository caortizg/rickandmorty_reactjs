import React from 'react';
import Grid from '@material-ui/core/Grid';
import {CardRMChararterV} from '../Card';

const PaginationListCharacter = (props) => {
    const {list,filters} = props;
    return (
        <Grid item justify="center" xs={12}>
            <Grid container justify="center" spacing={2}>
                {list.map((character,key)=>(
                    <Grid key={"cardCharacter"+key} item>
                        <CardRMChararterV character={character} search={[filters]}/>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}
export default PaginationListCharacter;