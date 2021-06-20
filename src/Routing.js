import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Login1 from './Login1';

import EnhancedTable from "./Service_Table.js";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route,Switch} from "react-router";
import Portfolio from './Portfolio' ;


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:"black"
   
  },
}))

export default function Routing() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <CssBaseline />

    
      
         <Switch>
                    
                    <Route path='/Admin' exact>
                        <EnhancedTable/>
                    </Route>
                    <Route path='/Admin/Queries' exact>
                        <Login1/>
                    </Route>
                    <Route path='/Admin/Portfolio' exact>
                        <Portfolio/>
                    </Route>
                    <Route path='/Admin/Pages' exact>
                    <Portfolio/>
                    </Route>
                    <Route path='/Admin/Users' exact>
                    <Portfolio/>
                    </Route>
                  
                </Switch>
     
    </div>
  );
}