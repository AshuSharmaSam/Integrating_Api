import React,{ useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LockIcon from '@material-ui/icons/Lock';
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import logo from './logo.png';
import { useFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });
const useStyles = makeStyles((theme) => ({
    paper: {
       
        textAlign: 'center',
        color: theme.palette.text.secondary,
        flexFlow:"start",
        backgroundColor:"white",
        width:"100%",
      
       alignItems:"start",
       height:"100%",
       textAlign:"start",
       alignContent:"start",
  
       borderRadius:"5%",
       justifyContent:"center",
  
      },
      
      
   
    
    form:{
        width: '100%', // Fix IE 11 issue.
    
        padding:theme.spacing(1),
        borderRadius:"5%",

        justifyContent:"center",
     
      
    
    },
    textt:{
      width:"100%",
      margin:theme.spacing(2),
      borderRadius:"25%",
      textAlign:"start",
      fontSize:"15px",
      color:"#000099",
      marginLeft:theme.spacing(0),
      
      
    },
    grids:{
        alignItems:"start",
        textAlign:"start",
         flexGrow: 1,
        
         width:"100%",
         height:"100%",
      
        

    },
    text1:{
        width:"100%",
        margin:theme.spacing(2),
        borderRadius:"25%",
        textAlign:"center",
        fontFamily:" Times New Roman, Times, serif",
        fontSize:"30px",
        color:"black",
     
   
    
    },
    text:{
      width:"100%",
      margin:theme.spacing(0.4),
      marginLeft:theme.spacing(0),
      borderRadius:"25%",
      
      fontFamily:" Arial, Helvetica, sans-seriff",
      fontSize:"30px",
     
      textAlign:"start",
      color:"#000099"
 
  
  },
  avatar:{
    justifyContent:"center",
    marginLeft:theme.spacing(18),
    width:theme.spacing(8),
    height:theme.spacing(8)
  },

    text2:{
      width:"100%",
        margin:theme.spacing(1),
        borderRadius:"25%",
        textAlign:"center",
        fontFamily:"Times New Roman, Times, serif",
        fontSize:"20px",
        color:"black",

    },
    text3:{
  
      margin:theme.spacing(1),
      fontFamily:"Times New Roman, Times, serif",
      fontSize:"15px",
      color:"black",
      marginLeft:theme.spacing(0),
    },
    textr:{
      width:"100%",
      margin:theme.spacing(0.2),
      
      fontFamily:"Times New Roman, Times, serif",
      fontSize:"30px",
      marginTop:theme.spacing(1.5),
      marginBottom:theme.spacing(1.5),
      textAlign:"center",
      color:"black",
  

    },
   
   
    texts:{
      
      
      marginTop:theme.spacing(0),
      marginBottom:theme.spacing(0.5)
    },
    text11:{
      fontSize:"30px",
      position:"center"
    },
    button:{
        width:"100%",
        marginLeft:theme.spacing(0),
        marginTop:theme.spacing(0.5),
        marginBottom:theme.spacing(0.5),
      
        color:"white",
        fontFamily:"Times New Roman, Times, serif",
       
    }
    
  }));
export default function Login1(){
    const classes = useStyles();
    const history = useHistory();
    const [values, setValues] = useState({
        password: '',
        message: '',
        email: '',
        open:false,
        
    });
    
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if(values.email=="ashusamsharma2484@gmail.com" && values.password=="react1234"){
                history.push("/Admin");
            
            }
        },
      });
  
    
   
   const handleClose = () => {
        setValues((values) => ({
            ...values,
            open:false
            
        }));
      };
    return(
      
         <Container component="main" maxWidth="xs" >
      <CssBaseline />
        
    
                <Grid item xs={12} sm={12} className={classes.grids}>
                    
                        
                        
                        <Paper className={classes.paper} elevation={0} >
                          
                            <form onSubmit={formik.handleSubmit} className={classes.form} >
                          
                           
                             <Typography component="h1" variant="h5"  className={classes.text}>
                             Sign In
                             </Typography>
                             <Typography component="h3" variant="h5"  className={classes.text3} >
                             Enter Your Details Below To Continue
                             </Typography>
                           
                             <span>
                                <TextField
                                 fullWidth
                                  id="email"
                                  name="email"
                                  label="Enter Email..."
                                  value={formik.values.email}
                                  onChange={formik.handleChange}
                                  error={formik.touched.email && Boolean(formik.errors.email)}
                                   helperText={formik.touched.email && formik.errors.email}
                                  className={classes.textr}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EmailIcon style={{color:"blue"}} />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                                </span>
                                <span>
                                  <TextField
                                  fullWidth
                                  id="password"
                                  name="password"
                                  label="Enter Password..."
                                  type="password"
                                  value={formik.values.password}
                                  onChange={formik.handleChange}
                                  error={formik.touched.password && Boolean(formik.errors.password)}
                                  helperText={formik.touched.password && formik.errors.password}
                                  className={classes.textr}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <LockIcon  style={{color:"blue"}} />
                                      </InputAdornment>
                                    ),
                                  }}
                                  />
                                  </span>
                                  <FormControlLabel
                                  control={<Checkbox value="remember" color="primary" />}
                                  label="Remember me"
                                  className={classes.texts}
                                   />
                                  <Button color="primary" variant="contained" className={classes.button} type="submit">
                                       Submit
                                    </Button>
      
                                 <Grid container>
                                     <Grid item xs   className={classes.textt}>
                                         <Link href="/forget" variant="body2">
                                             Forgot password?
                                        </Link>
                                      </Grid>
            
            
                                  </Grid>
                                  <br/>
                                 
                            </form>
                            </Paper>
                        
                            
                     
               </Grid>
          </Container>
          
       
    )
}