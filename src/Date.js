import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const some = {
  someDate: new Date().toISOString().substring(0, 10)
};
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Date To"
        type="date"
      
        defaultValue={some.someDate}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
          
        }}
        inputProps={{
          min:some.someDate,
          
        }}
      />
       <TextField
        id="date"
        label="Date From"
        type="date"
      
        defaultValue={some.someDate}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
          
        }}
        inputProps={{
          max:some.someDate,
          
        }}
      />
    </form>
  );
}
