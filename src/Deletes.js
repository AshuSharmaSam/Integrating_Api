//Delete Button Comman for Service and PortFolio
import {React,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import { DialogTitle } from '@material-ui/core';
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
  delete:{
    width:"400px",
    height:"150px",
    padding:theme.spacing(2)

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
export default function Deletes() {
  const classes = useStyles();
  const [open2, setOpen2] = useState(false);
  const handleClickOpen2 = (value) => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  return (
       <>
       <Tooltip title="Delete">
         <DeleteForeverOutlinedIcon style={{color:"red",width:"50%"}} onClick={handleClickOpen2}/>
         </Tooltip>
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
                    <Button onClick={handleClose2}  className={classes.cancel} variant="contained"  >
                      Cancel
                    </Button>
                    <Button onClick={handleClose2} classname={classes.but} variant="contained"  color="secondary" autoFocus >
                      Delete
               </Button>
                 </DialogActions>
                </div>
             </Dialog>
        </>
  );
}