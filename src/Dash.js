import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appx from './New';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ExploreIcon from '@material-ui/icons/Explore';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import {Link} from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import Login1 from './Login1';
import Pages from './Pages';

import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Route,Switch} from "react-router";
import Portfolio from './Portfolio' ;
import Services from './Services' ;
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import logo1 from './logo1.png';
import Lists from "./Listss"
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:"black"
   
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    zIndex:1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
   
  },

  img:{
    padding:theme.spacing(2),
    zIndex:1

  },

  box:{
    Top:0,
    Left:0,
    borderBottomLeftRadius:"120%",
     borderBottomRightRadius:"120%",
     width:theme.spacing(30),
     height:theme.spacing(15),
      zIndex:0.8,
      backgroundColor:"#4dffff",
      position:"fixed",
      
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"inherit",
     zIndex:0.6,
  },
  // necessary for content to be below app bar
  toolbar:theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    backgroundColor:"	 #ffff00",
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.box}/>
      <AppBar position="fixed" className={classes.appBar}>
        <Appx/>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
      
   
      <img src={logo1} className={classes.img}/>
  
        <div className={classes.toolbar} />
        
      
        <List className={classes.List}>
        {<Lists/>}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
         <Switch>
                    <Route path='/Admin' exact>
                        <Services />
                    </Route>
                    <Route path='/Admin/Queries' exact>
                        <Login1/>
                    </Route>
                    <Route path='/Admin/Portfolio' exact>
                        <Portfolio/>
                    </Route>
                    <Route path='/Admin/Pages' exact>
                        <Pages/>
                    </Route>
                    <Route path='/Admin/Users' exact>
                        <Pages/>
                    </Route>
                </Switch>
      </main>
    </div>
  );
}