import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { useHistory } from "react-router-dom";
import { makeStyles, createStyles, createMuiTheme, Theme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import whiteBackgroundLogo from '../../LogoImgSrc/logo_white_background.jpg';
import { joinUsEmailAtom, joinUsEmailSelector } from '../../selector/JoinUsEmailSelector';
import { IconButton } from '@material-ui/core';

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
    alert: {
        borderRadius: 4,
        position: 'fixed',
        top: 0,
        width: '50vh',
        height: '3vh',
        left: '60vh'
    },
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
    multilineColor: {
        color: 'white'
    },

    //button text styling
    buttonText: {
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
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [textFieldLabel, setTextFieldLabel] = useState('Enter your email here')
    const [isLoading, setIsLoading] = useState(false);
    const [isHasValue, setIsHasValue] = useState(false);
    const setJoinUsEmailAtomState = useSetRecoilState(joinUsEmailAtom);
    const joinUsEmailLoadable = useRecoilValueLoadable(joinUsEmailSelector);

    const timer = useRef<number>();

    const handleOnClick = () => {
        if(email === ''){
            return;
        }
        setTextFieldLabel('Enter your email here');
        setIsLoading(true);
        timer.current = window.setTimeout(() => {
            setJoinUsEmailAtomState(email);
            if(joinUsEmailLoadable.state !== 'loading'){
                setIsLoading(false);
            }
        }, 1200);
    }
    function ValidateEmail(email: string): boolean
    {
    return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email));
    }

    useEffect(() => {
        if(joinUsEmailLoadable.state === 'hasValue' && email !== ''){
            if(joinUsEmailLoadable.contents === 'You have already joined us, we will contact you shortly. Thank you!' || 
               joinUsEmailLoadable.contents === 'Thank you for joining us, we will contact you shortly' ||
               joinUsEmailLoadable.contents === 'Please send us a valid email'
            ){
                setIsHasValue(true)
            }
        }
        return ()=>{
            clearTimeout(timer.current);
            setJoinUsEmailAtomState('');
        }
    }, [joinUsEmailLoadable,isHasValue])

    return (
        <Box display="flex" justifyContent="flex-start" m={0} p={0} bgcolor="background.paper">
                
            {isHasValue ? <Collapse in={isHasValue}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setIsHasValue(false);
                                setEmail('');
                                history.push('/promovideo')
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    className={classes.alert}
                    onClick={()=>history.push('/promovideo')}
                >
                    {joinUsEmailLoadable.contents}
                </Alert>
            </Collapse> : null}
            <Box display="flex" alignItems='center' justifyContent="center" m={0} p={0} bgcolor="white" style={{ height: '100vh', width: '100vh' }} onClick={()=>{history.push('/promovideo')}}>
                <MediaCard />
            </Box>
            <Box display="flex" alignItems='center' justifyContent="center" m={0} p={0} style={{ height: '100vh', width: '100vh', backgroundColor: grey[900] }}>
                <Box p={1} bgcolor={grey[900]} style={{ height: '60vh', width: '60vh' }}>
                    <ThemeProvider theme={theme}>
                        <Typography className={classes.welcomeText} variant="h2">Welcome</Typography>
                        <Typography className={classes.text} variant="h6">leeker.io is a highly user friendly and Decomplicated cryptocurrency news and exchange data collection website. We do our best to lower the threshold for users to understand cryptocurrency. And provide highly user oriented information to improve the transparency and participation of the encrypted currency community.</Typography>
                        <Typography className={classes.text} variant="h6">We sincerely invite friends who are willing to promote cryptocurrency and the defi community to join and write tutorials and experience, We will reward the original tokens to early stage contributors.</Typography>
                        <Typography className={classes.text} variant="h6">bigsprite872078694@gmail.com</Typography>
                    </ThemeProvider>
                    {isLoading ? <CircularProgress style={{ height: '5vh', width: '5vh', marginRight: '1vh', marginTop: '20' }} /> :
                        <div>
                            <TextField id="mui-outlined-basic" label={textFieldLabel} variant="outlined"
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
                                }} style={{ width: "40vh" }}
                                onChange={(event: React.ChangeEvent<{ value: string }>) => {
                                    if(ValidateEmail(event.target.value)){
                                        setTextFieldLabel('Email is valid');
                                        setEmail(event.target.value)
                                    }else{
                                        setTextFieldLabel('Please type a valid email');
                                    }
                                }} />
                            <ThemeProvider theme={buttonTheme}>
                                <Button variant="outlined" size="large" color="primary" style={{ width: "15vh", height: "5vh", marginLeft: '2vh' }} onClick={handleOnClick} >
                                    <ThemeProvider theme={theme}>
                                        <Typography className={classes.buttonText} variant="h6">Join</Typography>
                                    </ThemeProvider>
                                </Button>
                            </ThemeProvider>
                        </div>
                    }
                </Box>
            </Box>
        </Box>
    )
}