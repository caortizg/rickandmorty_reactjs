import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import {tableStatusCodes,filterCharacterByAnyAttribute} from '../models/character';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import bgImages, {dots5} from '../backgroundImage'; 
import toolsArray from '../tools/array';
import {PaginationCharacter,PaginationListCharacter} from '../components/Pagination';
import {FilterCharacter} from '../components/Filter';
import {CircularProgressCharacter} from '../components/Progress';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";




const useStyles = makeStyles((theme) => ({
    mainTitle: {
        color: "#f5f5f5",
    },
    root: {
        flexGrow: 1,
        backgroundImage: `url(${dots5}),url(${bgImages[Math.floor(Math.random() * bgImages.length)]})`,
        backgroundColor: "rgba(0,0,0,.2)",
    },
    control: {
        padding: theme.spacing(1),
    },
}));
function Characters(props) {

    const classes = useStyles();

    const {stateCharacter,loadListAsync} = props;
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [characters, setCharacters] = useState([]);
    const [charactersFiltered, setCharactersFiltered] = useState([]);
    const [charactersPage, setCharactersPage] = useState([]);
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState([]);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
    };
    const filterCharacters = () => {
        let res = filterCharacterByAnyAttribute(characters, {
            name : search,
            status : search,
            species : search,
            type : search,
            gender : search,
            location : search,
        })
        console.log({characters, res})
        setCharactersFiltered(search ? res : characters)
        setFilters([
            search
        ])
    }

    useEffect(() => {
        if(stateCharacter.listStateCode == tableStatusCodes.LOADED){
            setCharacters(stateCharacter.list);
        }
    },[stateCharacter]);

    useEffect(() => {
        if(stateCharacter.listStateCode == tableStatusCodes.LOADED){
            filterCharacters();
        }
    },[characters]);

    useEffect(() => {
        if(stateCharacter.listStateCode == tableStatusCodes.LOADED){
            setPages(Math.ceil(charactersFiltered.length / limit));
            setCharactersPage(toolsArray.paginate(charactersFiltered, limit, page));
        }
    },[charactersFiltered, pages, page, limit]);

    return (
        <>
            <Header />
            <div style={{ padding: 8 }}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2} className={classes.control}>
                            <Grid item>
                                <Typography className={classes.mainTitle} gutterBottom variant="h5" component="h2">Personajes</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <FilterCharacter onChange={handleChangeSearch} value={search} onSearch={filterCharacters} />
                    {
                        charactersPage.length ? 
                        <PaginationListCharacter list={charactersPage} filters={[filters]}/> :
                        <CircularProgressCharacter />
                    }
                    <PaginationCharacter pages={pages} page={page} onChange={handleChangePage} />
                </Grid>
            </div>
            <Footer />
        </>
    );
}

const mapState = (state) => ({
    stateCharacter: state.character,
})

const mapDispatch = (dispatch) => ({
    loadListAsync: () => dispatch.character.loadListAsync(),
})

export default connect(
    mapState,
    mapDispatch
)(Characters)