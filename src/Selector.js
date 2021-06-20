//Global Selector used in appbar and services_table and Portfolio
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TranslateIcon from '@material-ui/icons/Translate';
const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  text:{
      color:"black",
  },
  but:{
    marginLeft:theme.spacing(2),
    marginRight:theme.spacing(2),
    
 
  },
  formControl: {
    margin: theme.spacing(1),
    backgroundColor:"inherit",
    color:"white"
  },
}));

export default function Selector(props) {
  const classes = useStyles();
  const [Lang, setLang] = React.useState(props.item1);
  const [open, setOpen] = React.useState(false);
 
  const handleChange = (event) => {
    setLang(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
        <Button className={classes.but}>
        {props.icon}
 
      <FormControl className={classes.formControl}>
      
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={Lang}
          onChange={handleChange}
          className={classes.text}
          
        >
          
          <MenuItem value={props.item1}>
            <em>{props.select}</em>
          </MenuItem> 
          <MenuItem value={props.item1} >{props.item1}</MenuItem>
          <MenuItem value={props.item2} >{props.item2}</MenuItem>
          <MenuItem value={props.item3}>{props.item3}</MenuItem>
        </Select>
      </FormControl>
      </Button>
    </div>
  );
}