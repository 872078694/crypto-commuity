import React from 'react';
import { makeStyles, createStyles, createMuiTheme, Theme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
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

const buttonTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
        contrastText: "#fff" //button text white instead of black,
      },
      background: {
        default: "#fff"
      }
    }
  }
  );

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
        color: "white",
        fontWeight: 400,
        marginBottom: '5vh'
    },
    text: {
        color: "white",
        marginBottom: '4vh'
    },
    textFieldRoot: {
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
          },
    },

    cssLabel: {
        color: 'white',
        "&.Mui-focused": {
            color: "white",
          },
    },

    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: `${theme.palette.primary.main} !important`,
        }
    },

    cssFocused: {},

    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'white !important',
        '& $notchedOutline': {
            border: '1px solid white'
          },
    },
    multilineColor:{
        color:'white'
    },
    
    //button text styling
    buttonText:{
        color: "white",
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

    return (
        <Box display="flex" justifyContent="flex-start" m={0} p={0} bgcolor="background.paper">
            <Box display="flex" alignItems='center' justifyContent="center" m={0} p={0} bgcolor="white" style={{ height: '100vh', width: '100vh' }}>
                <MediaCard />
            </Box>
            <Box display="flex" alignItems='center' justifyContent="center" m={0} p={0} style={{ height: '100vh', width: '100vh', backgroundColor: grey[900] }}>
                <Box p={1} bgcolor={grey[900]} style={{ height: '60vh', width: '60vh' }}>
                    <ThemeProvider theme={theme}>
                        <Typography className={classes.welcomeText} variant="h2">Welcome</Typography>
                        <Typography className={classes.text} variant="h6">leeker.io is a highly user friendly and Decomplicated cryptocurrency news and exchange data collection website. We do our best to lower the threshold for users to understand cryptocurrency. And provide highly user oriented information to improve the transparency and participation of the encrypted currency index.</Typography>
                        <Typography className={classes.text} variant="h6">We sincerely invite friends who are willing to promote cryptocurrency and the defi community to join and write tutorials and experience, We will reward the original tokens to early contributors</Typography>
                        <Typography className={classes.text} variant="h6">bigsprite872078694@gmail.com</Typography>
                    </ThemeProvider>
                    <TextField id="mui-outlined-basic" label="Enter your email here" variant="outlined" 
                    className={classes.cssLabel}
                    InputLabelProps={{
                        classes: {
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                        },
                    }} InputProps={{
                        classes: {
                            root: classes.cssOutlinedInput,
                            focused: classes.cssFocused,
                            notchedOutline: classes.notchedOutline,
                            input: classes.multilineColor,
                        },
                        inputMode: "numeric"
                    }} style={{ width: "40vh" }} />
                    
                    <ThemeProvider theme={buttonTheme}>
                    <Button variant="outlined" size="large" color="primary" style={{ width: "15vh" ,height:"5vh" ,marginLeft:'2vh'}}>
                    <ThemeProvider theme={theme}>
                        <Typography className={classes.buttonText} variant="h6">Join</Typography>
                    </ThemeProvider>
                    </Button>
                    </ThemeProvider>
                    
                </Box>
            </Box>
        </Box>
    )
}