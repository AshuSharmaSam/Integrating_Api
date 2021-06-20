import React,{ useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width:theme.spacing(10),
    height:theme.spacing(10)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

export default function Login() {
  const history = useHistory();
    const [values, setValues] = useState({
        password: '',
        message: '',
        email: '',
        open:false,
        
    });
    const handleemail = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };
    const handlepassword = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            password: event.target.value,
        }));
    };
    const Submit = (e) => {
        e.preventDefault();
        localStorage.setItem('Email',values.email);
      localStorage.setItem('Password', values.password);
        if(values.email=="ashusamsharma2484@gmail.com" && values.password=="react"){
          history.push("/Admin");
        
        }
        else if(values.email=="" || values.password==""){
            setValues((values) => ({
                ...values,
                open:true,
                message:"Some Field is missing",
     
            }));
        }
        else{
            setValues((values) => ({
                ...values,
                open:true,
                message:"Invalid Email or Password"
                
            }));
        }
        setValues((values) => ({
          ...values,
          password:"",
          email:""
      }));
    };
   const handleClose = () => {
        setValues((values) => ({
            ...values,
            open:false
            
        }));
      };
const classes = useStyles();
  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          
          Free Lancers House
        </Typography>
        <form className={classes.form} Validate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleemail}
            value={values.email}
            autoFocus
        
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
            onChange={handlepassword}
            value={values.password}
            autoComplete="current-password"
          />
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
            onClick={Submit}
            
          >
            Sign In
          </Button>
         
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            
            
          </Grid>
        </form>
        <Dialog
            open={values.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.dialog}
          >
            <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {values.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Okay
              </Button>
            </DialogActions>
          </Dialog>
      </div>
     
    </Container>

  );
}