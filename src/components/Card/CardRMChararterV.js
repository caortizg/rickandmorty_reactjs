import React from 'react';
import { CardMediaV } from '.';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import {dead} from '../../backgroundImage';
import {generalTools} from '../../tools';
import FaceIcon from '@material-ui/icons/Face';

const BadgeStatus = withStyles((theme) => ({
    badge: {
        backgroundColor: props => props.colorstatus ? props.colorstatus : '#44b700',
        color: props => props.colorstatus ? props.colorstatus : '#44b700',
        boxShadow: props => `0 0 0 2px `+(props.colorstatus ? props.colorstatus : '#44b700'),
    }
}))(Badge);


const useStyles = makeStyles((theme) => ({
    titleAlive: {
        boxShadow : "0px 0px 10px 2px #44b700"
    },
    titleDead: {
        boxShadow : "0px 0px 10px 2px #d63d2e"
    },
    title: {
        backgroundColor: "#24282f",
        color: "#f5f5f5",
    },
    titleRoot: {
        marginTop: "-28px",
        paddingBottom: "20px"
    },
    title2: {
        color: "rgb(158, 158, 158);",
        fontSize: "16px",
        margin: 0
    },
    description: {
        color: "rgb(245, 245, 245);",
    },
}));

function CardRMChararterV(props){
    const classes = useStyles();
    const {character, search} = props;
    const status = character.status.toLowerCase().trim();
    const classStatus = status == 'alive' ? classes.titleAlive : status == 'dead' ? classes.titleDead : classes.title ;
    const colorstatus = status == 'alive' ? "#44b700": status == 'dead' ? "#d63d2e": "#141414" ;

    let name = generalTools.highlightCompoenet(character.name,search);
    let gender = generalTools.highlightCompoenet(character.gender,search);
    let species = generalTools.highlightCompoenet(character.species,search);
    let locationName = generalTools.highlightCompoenet(character.location.name,search);


    return (
        <CardMediaV 
            imageUrl={character.image}
            body={<>
                <div className={classes.titleRoot} >
                    <BadgeStatus 
                        variant="dot"
                        colorstatus={colorstatus}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <Chip 
                            size="small" 
                            label={name} 
                            className={classes.title+' '+classStatus} 
                            {...{
                                avatar: status == 'dead' ? <Avatar  src={dead}/>  : null,
                                icon: status == 'alive' ? <FaceIcon />  : null,
                            }}
                        />
                    </BadgeStatus>
                </div>
                <div >
                    <Typography className={classes.title2} color="textSecondary" gutterBottom>Última ubicación conocida</Typography>
                    <Typography className={classes.description} color="textSecondary" gutterBottom>{locationName}</Typography>

                    <Typography className={classes.title2} color="textSecondary" gutterBottom>Género</Typography>
                    <Typography className={classes.description} color="textSecondary" gutterBottom>{gender}</Typography>

                    <Typography className={classes.title2} color="textSecondary" gutterBottom>Especie</Typography>
                    <Typography className={classes.description} color="textSecondary" gutterBottom>{species}</Typography>
                </div>
            </>}
        />
    );
}

CardRMChararterV.propTypes = {
    character: PropTypes.object,
    status: PropTypes.string,
    search: PropTypes.array,
};


export default CardRMChararterV;