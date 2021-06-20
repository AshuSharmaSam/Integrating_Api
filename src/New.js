import React from 'react';
import { makeStyles,fade} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';

import {Link} from "react-router-dom";
import Langs from "./Selector";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent:"center",
    

  
  },
  menuButton: {
   
    width:theme.spacing(5),
    height:theme.spacing(5),
    color:"inherit"
    
  },
  Avatar:{
  
 
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      position:"relative"

    },
    
  },
  image:{
  
    width:"20%",
    height:"60px",
    
    opacity:2,
    [theme.breakpoints.down('sm')]: {
  
     display:"none"
    },
    

  },
  image1:{
    marginLeft:theme.spacing(1),
     width:"120px",
    height:"60px",
    
    opacity:2,
     [theme.breakpoints.up('lg')]: {
  
     display:"none"
    },
  },
  Icon:{
    margin:theme.spacing(1),
    [theme.breakpoints.down('md')]: {
  
      margin:theme.spacing(0),
     },
    
  },
  text:{
    flexGrow: 1,
    fontSize:"30px",
    color:"black",
    textAlign:"center"
  },
  Menu2:{
    marginTop:"40px"
  },
  img1:{
    width:"100%",
    height:"100%",
    padding:theme.spacing(1)
  },
  title: {
    flexGrow: 1,
    
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor:"black",
    opacity:0.8,
    '&:hover': {
      backgroundColor:"white",
      opacity:1
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:"black"
  },
  inputRoot: {
    color: 'black',
  },
  
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  appbar:{
    backgroundColor:"black",
   
    

  }
}));

export default function Appx() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="absoloute" className={classes.appbar}>
        <Toolbar>
        <Typography component='h1' varient="h5" className={classes.texts}>
            
          </Typography>
          
          <Typography component='h1' varient="h5" className={classes.text}>
            
          </Typography>
         
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
           
         
          <div className={classes.Icon} style={{color:"white"}}>
              <GitHubIcon/>
            </div>
          
            <Langs/>
           
        
          <Button aria-controls="simple-menu" aria-haspopup="true"  className={classes.Avatar} onClick={handleClick}>
            <Avatar />
          </Button>
            <Menu
             id="simple-menu"
             anchorEl={anchorEl}
              keepMounted
            open={Boolean(anchorEl)}
             onClose={handleClose}
             className={classes.Menu2}
             >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <Link to="/">
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Link>
            </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
