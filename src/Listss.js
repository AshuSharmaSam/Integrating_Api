import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ExploreIcon from '@material-ui/icons/Explore';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles((theme) => ({
  button:{
    color:"white",
    textDecoration:"none",
 
   
  }
 
}))
export default function Lists(){
  const classes = useStyles();
    return(
    <div>
    <Link to='/Admin' className={classes.button}>
      <ListItem button >
        <ListItemIcon  style={{color:"white"}}  >
        <Tooltip title="Services">
          <ShoppingCartIcon  />
          
      </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Services"  />
      </ListItem>
    </Link>

    <Link to="/Admin/Queries" className={classes.button}>
      <ListItem button>
        <ListItemIcon>
          
        <Tooltip title="Queries">
        <QuestionAnswerIcon  style={{color:"white"}} />
        </Tooltip>
          
        </ListItemIcon>
        <ListItemText primary="Queries"  />
      </ListItem>
    </Link>
   
    <Link to="/Admin/Portfolio" className={classes.button}>
      <ListItem button>
        <ListItemIcon>
        <Tooltip title="Portfolio">
          <ExploreIcon  style={{color:"white"}} />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Portfolio" />
      </ListItem>
      </Link>
 
      <Link to="/Admin/Pages" className={classes.button}>
      <ListItem button >
        <ListItemIcon>
        <Tooltip title="Pages">
          <BarChartIcon   style={{color:"white"}} />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Pages" />
      </ListItem>
      </Link>
  
      <Link to="/Admin/Users" className={classes.button}>
      <ListItem button>
        <ListItemIcon>
          <Tooltip title="Users">
          <PeopleIcon  style={{color:"white"}}  />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Users"/>
      </ListItem>
      </Link>
     
    </div>
    )
}
