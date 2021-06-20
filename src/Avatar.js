import React from 'react';
import { makeStyles,fade} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';

import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
 
  menuButton: {
   
    width:theme.spacing(5),
    height:theme.spacing(5),
    color:"inherit"
    
  },
  Menu2:{
    marginTop:"40px"
  },
  Avatar:{
  
 
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      position:"relative"

    },
    
  },
 
  
}));

export default function Avatars() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
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
       
    </div>
  );
}
