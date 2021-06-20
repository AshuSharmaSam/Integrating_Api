import {React,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
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
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Searches from "./Search.js";
import Selector from "./Selector";
import FilterListIcon from '@material-ui/icons/FilterList';
const useStyles = makeStyles((theme) => ({
  table: {
  
   border:"0.01px solid black",
   backgroundColor:" #e6e6e6",
     [theme.breakpoints.down('md')]: {
      
      fontSize:"10px"
    },
  
    
  },
 filter:{
  
 },
  root:{
    flexGrow:1,
   backgroundColor:"white",

  },
  container:{
    backgroundColor:"white"
  },
  search:{
    padding:theme.spacing(2),
   
    paddingLeft:theme.spacing(0)
 
  },
  
  but:{
    backgroundColor:"red",
    color:"white"
  },
    but2:{
    backgroundColor:"blue",
    color:"white"
  },
  table1: {
    width:"5%",
    border:"0.01px solid black",
      [theme.breakpoints.down('md')]: {
      
      fontSize:"10px"
    },

  },
  cancel:{
    color:"white"

  },
  table2: {
    width:"5%",
    border:"0.01px solid black",
      [theme.breakpoints.down('md')]: {
      
      fontSize:"10px"
    },

  },
  
  delete:{
   
    minHeight:"150px",
    minWidth:"150px",
    padding:theme.spacing(4),
    fontSize:"50px",
    backgroundColor:"rgb(207, 203, 192)"

  },
  dialogs:{
    backgroundColor:"#bfbfbf"
  },
  table3: {
    width:"70%",
    border:"0.01px solid black",
      [theme.breakpoints.down('md')]: {
      
      fontSize:"10px"
    },

  },
 
  action:{
    width:"5%",
    border:"0.01px solid black"
  },
}))
export default function Services() {
  const classes = useStyles();
const [open, setOpen] = useState(false);
const [open2, setOpen2] = useState(false);
const [d,setData]=useState({strings})
 const [i, setId] = useState([]);
const [values, setValues] = useState({
        id: '',
        description: '',
        name:''
        
    });
 
  const handleClickOpen = (value) => {
    setOpen(true);
    setId(value)
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = (value) => {
    setOpen2(true);
    
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  
  return (

 <div className={classes.root}>
  <Grid container  >

  <Grid item xs={6} sm={6} md={6} lg={3} className={classes.search}>
  <Searches placeholder={"Search"} />
  </Grid>
  
   <Grid item xs={6} sm={6} md={6} lg={3} className={classes.filter}>
  <Selector icon={< FilterListIcon style={{color:"black"}}/>} select={"Filter"} item1={"id"} item2={"Name"} />
  </Grid>

        <Grid item xs={12}>
         
    <TableContainer component={Paper} className={classes.container}>
      <Table >
        <TableHead>
          <TableRow className={classes.table}>
            <TableCell align="start" className={classes.table1} >Id</TableCell>
            <TableCell align="start"  className={classes.table2} >Name</TableCell>
            <TableCell align="start" className={classes.table3}  >Description</TableCell>
            <TableCell align="center"  className={classes.action} >Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {strings.data.map((item,index) => (
            <TableRow key={item.id} className={classes.table1} style ={ index % 2? { background : " #e6e6e6" }:{ background : "white" }}>
            <TableCell component="th" scope="row" className={classes.table1}>
                {item.id}
              </TableCell>
              <TableCell component="th" scope="row" className={classes.table2}>
                {item.name}
              </TableCell>
              <TableCell align="start" className={classes.table3} >{item.description}</TableCell>
             <TableCell align="center"  className={classes.action}>
           <Tooltip title="Edit">
             <EditIcon   style={{color:"blue",width:"50%"}} onClick={() => {handleClickOpen(item)}}/>
             </Tooltip>
                <Tooltip title="Delete">
               <DeleteForeverOutlinedIcon style={{color:"red",width:"50%"}} onClick={handleClickOpen2}/>
               </Tooltip>
            
             <Dialog
             open={open}
             onClose={handleClose}
             aria-labelledby="alert-dialog-title"
             aria-describedby="alert-dialog-description"
             
             >
            <DialogContent >
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="id"
            label="id"
            name="id"
            autoComplete="id"
            InputProps={{
            readOnly: true,
            }}
            
            defaultValue={i.id}
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
         
            defaultValue={i.name}
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
            
            defaultValue={i.description}
            autoFocus
        
          />
          </DialogContent>
          <DialogActions>
          
          <Button onClick={handleClose} variant="contained" color="primary" className={classes.but2}>
            Save
          </Button>
          <Button onClick={handleClose}   classname={classes.cancel}>
            Cancel
          </Button>
          </DialogActions>
          </Dialog>
          
    
          
             <Dialog
             open={open2}
             onClose={handleClose2}
             aria-labelledby="alert-dialog-title"
             aria-describedby="alert-dialog-description"
         
             >
               <div  className={classes.delete}>
            <DialogContent>
              
           <Typography>
             Are you sure you want to delete it
           </Typography>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose2}  className={classes.but} variant="contained" color="secondary" autoFocus  >
            Delete
          </Button>
          <Button onClick={handleClose2} classname={classes.cancel} variant="contained" >
            Cancel
          </Button>
          </DialogActions>
          </div>
          </Dialog>
          </TableCell>
          </TableRow>
          ))}
          </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
  </div>
  );
}