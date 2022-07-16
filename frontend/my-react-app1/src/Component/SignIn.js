import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Button, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import API from '../Axios/Api';
const useStyles = makeStyles({
    paper: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: 1,
        backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    form: {
        width: '60%',
        marginTop: 1,
    },
    submit: {
        margin: 3
    },
    error: {
        color: 'red',
    },
});
const SignIn = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = () => {
        API.post('/users/login', {
            email,
            password,
        })
            .then((res) => {
                
                localStorage.setItem("CC_Token", res.data.accesToken);
                navigate('/Home');
            }).catch(error => {
                toast("Erreur de connexion", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }
    const handleSubmit = (event) => {
        console.log(`
Email : ${email}
Password : ${password}
`);
        event.preventDefault();
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <ToastContainer />
            </div>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => { loginUser() }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );
}
export default SignIn;