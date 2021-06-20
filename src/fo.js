import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo1 from './logo1.png'
import Container from '@material-ui/core/Container';
import Login1 from "./Login1.js";
const useStyles = makeStyles((theme) => ({
  grid: {
    minWidth:"100%",
    minHeight:"100%",
    justifyContent:"center",
    padding:theme.spacing(2),
    backgroundColor:" #f5f5f0"
   
  },

  root:{
    flexGrow:1,
    padding:theme.spacing(6),
    backgroundColor:" #f5f5f0"
  },

  logo:{
    marginTop:theme.spacing(12)
  },
  grid1:{
    
    minHeight:"100%",
    padding:theme.spacing(8),
    justifyContent:"center",
    
    backgroundColor:" #66ffff"
  },
  grid2:{
    
    paddingBottom:theme.spacing(15),
    
    padding:theme.spacing(2),
    backgroundColor:"white",
    
   

  },
 
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
   <div className={classes.root}>
    <Grid container component="main" className={classes.grid}>
      <CssBaseline />
     <Grid item xs={12} sm={12} md={12} lg={5} xl={5} className={classes.grid1}>
       <img src={logo1} className={classes.logo}/>
     </Grid>
     <Grid item xs={12} sm={12} md={12} lg={4} xl={4} className={classes.grid2}>
       <Login1/>
     </Grid>
    </Grid>
</div>

  );
}