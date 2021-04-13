import React from 'react';
import { makeStyles, createStyles, createMuiTheme, Theme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import whiteBackgroundLogo from '../../LogoImgSrc/logo_white_background.jpg';

let theme = createMuiTheme({
    typography: {
        fontFamily: '-apple-system',
      },
});
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme: Theme) => createStyles({
    leftGrid: {
        backgroundColor: 'green',
        height: '100vh',
        width: '100vh',
        position: 'relative',
    },
    rightGrid: {
        backgroundColor: 'yellow',
        height: '100vh',
        width: '100vh',
    },
    LogoRoot: {
        height: '50vh',
        width: '50vh',


    },
    LogoMedia: {
        height: '40vh',
        width: '40vh',
        top: '20%',
        left: '20%',
    },
    welcomeText: {
        color:"white",
        fontWeight: 400,
        marginBottom:'5vh'
    },
    text:{
        color:"white",
        marginBottom:'4vh'
    }
}));


function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.LogoRoot} elevation={0} >
            <CardMedia
                className={classes.LogoMedia}
                image={whiteBackgroundLogo}
                title="Contemplative Reptile"
            />
        </Card>
    );
}



export function CommingSoonPage() {
    const classes = useStyles();
    // return (
    // <div>
    //     <Grid container>
    //         <Grid item xs={6} sm={6}>
    //             <div className={classes.leftGrid}>
    //                 <MediaCard/>                    
    //             </div>
    //         </Grid>
    //         <Grid item xs={6} sm={6}>
    //             <div className={classes.rightGrid}/>
    //         </Grid>    
    //     </Grid>    
    // </div>

    // );
    return (
        <Box display="flex" justifyContent="flex-start" m={0} p={0} bgcolor="background.paper">
            <Box display="flex" alignItems='center' justifyContent="center" m={0} p={0} bgcolor="white" style={{ height: '100vh', width: '100vh' }}>
                <MediaCard />
            </Box>
            <Box display="flex" alignItems='center' justifyContent="center" m={0} p={0} style={{ height: '100vh', width: '100vh', backgroundColor: grey[900]}}>
                <Box p={1} bgcolor={grey[900]} style={{ height: '60vh', width: '60vh' }}>
                    <ThemeProvider theme={theme}>
                        <Typography className={classes.welcomeText} variant="h2">Welcome</Typography>
                        <Typography className={classes.text} variant="h6">Since our opening, we have become masters of our craft. our commitment to quality products, exceptional services and incomparable customer case keep our community coming back again and again.</Typography>
                        <Typography className={classes.text} variant="h6">info@mysite.com</Typography>
                        <Typography className={classes.text} variant="h6">123-456-7890</Typography>
                    </ThemeProvider>
                </Box>
            </Box>
        </Box>
    )
}