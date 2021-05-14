import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        backgroundColor: "rgb(60, 62, 68)"
    },
    media: {
        maxHeight: 200,
        objectPosition: "0 0",
    },
    mainTitle: {
        color: "#f5f5f5",
    },
    bodyText: {
        color: "#f5f5f5",
    },
});
function CardLocal(props){
    const classes = useStyles();
    const {
        imageUrl,
        mainTitle,
        bodyText,
        body
    } = props;
    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={imageUrl}
                title="Contemplative Reptile"
                className={classes.media}
            />
            <CardContent>
                {mainTitle ?
                    <Typography className={classes.mainTitle} gutterBottom variant="h5" component="h2">{mainTitle}</Typography>
                    :null}
                {bodyText?
                    <Typography className={classes.bodyText}  variant="body2" color="textSecondary" component="p">{bodyText}</Typography>
                :null}
                {body?body:null}
            </CardContent>
        </Card>
    );
}

CardLocal.propTypes = {
    imageUrl: PropTypes.string,
    mainTitle: PropTypes.string,
    bodyText: PropTypes.string,
    body: PropTypes.node,
};


export default CardLocal;