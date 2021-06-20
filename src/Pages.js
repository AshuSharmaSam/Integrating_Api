import {React,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import strings  from './comman.json';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    border:"2px solid black"
  },
});





export default function Pages() {
  const classes = useStyles();
const [open, setOpen] = useState(false);
 const [i, setId] = useState([]);
const [values, setValues] = useState({
        id: '',
        description: '',
        name:''
        
    });
  const handleid = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            id: event.target.value,
        }));
    };
    const handlename = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };
    const handledes = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            description: event.target.value,
        }));
    };

  const handleClickOpen = (value) => {
    setOpen(true);
    setId(value)
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {strings.data.map((item) => (
            <TableRow key={item.id}>
            <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="start">{item.description}</TableCell>
             <TableCell align="start">
             <Button variant="outlined" color="primary"  onClick={() => {handleClickOpen(item)}}>
                Edit
             </Button>
             <Dialog
             open={open}
             onClose={handleClose}
             aria-labelledby="alert-dialog-title"
             aria-describedby="alert-dialog-description"
             >
            <DialogContent>
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="id"
            label="id"
            name="id"
            autoComplete="id"
            onChange={handleid}
            value={i.id}
            autoFocus
        
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="name"
            name="name"
            autoComplete="name"
            onChange={handlename}
            value={i.name}
            autoFocus
        
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="description"
            label="description"
            name="description"
            autoComplete="description"
            onChange={handledes}
            value={i.description}
            autoFocus
        
          />
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose} color="primary">
            Edit
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Delete
          </Button>
          </DialogActions>
          </Dialog>
          </TableCell>
          </TableRow>
          ))}
          </TableBody>
      </Table>
    </TableContainer>
  );
}