import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo1 from './logo1.png';
import Routing from './Routing.js';
import logo from "./logo.png";
import Selector from "./Selector";
import Avatars from "./Avatar";
import Searches from "./Search.js";
import Lists from "./Listss";
import TranslateIcon from '@material-ui/icons/Translate';
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:"	white",
    maxWidth:"100%"
  },
  appBar: {
    height:"60px",
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'white',
    border:"0.001px solid white",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,

    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 40,
   
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    
  },
  img:{
    width:"40px",
    marginLeft:"0px"
  },

  list:{
   
    width:"100%",
    backgroundColor:"white",
    height:"60px",
    padding:"0px",
    
   
   

    
    
  },
  image:{
    width:"100%",
    justifyContent:"start",

    
  

    
  },
  spacing: {
    flexGrow: 1,
    
  },
  drawerOpen: {
    width: drawerWidth,
    zIndex:0,
    backgroundColor:"#19ad9c",
    border:"0.001px solid white",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor:"#19ad9c",
    zIndex:0,
    border:"0.001px solid white",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  l:{
    marginTop:theme.spacing(2),
    marginLeft:theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      marginLeft:theme.spacing(0)
    },

  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(6),
    marginTop:theme.spacing(6),
    backgroundColor:"#f2f2f2"
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <img src={logo} className={classes.img}/>
            </IconButton>
            <Typography className={classes.spacing}/>
            <Searches placeholder={"Search"}/>
             <Selector icon={< TranslateIcon style={{color:"black"}}/>}  select={'Select Language'} item1={'English'} item2={'Hindi'}  item3={'Tamil'} />
            <Avatars/>
          
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.list}>
          <IconButton onClick={handleDrawerClose}>
            <img src={logo1} className={classes.image}/>
          </IconButton>
       
        </div>
        <div  className={classes.l} >
          {<Lists/>}
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      <div className={classes.drawerHeader} />
        <Routing/>
        </main>
      </div>
  );
}
