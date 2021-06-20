import React from 'react';
import { makeStyles,fade} from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
 
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.05),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    opacity:0.8,
    '&:hover': {
      backgroundColor:"white",
      opacity:1
    },
    marginRight: theme.spacing(4),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
        marginRight: theme.spacing(0),
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
 
}));

export default function Searches(props) {
  const classes = useStyles();
  

  return (

      
         
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder={props.placeholder}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
           
        
           
        

  );
}
