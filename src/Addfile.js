import {React,useState} from 'react';
import { useFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DialogTitle } from '@material-ui/core';
import Dropzone from './Imagedrop';
import DragAndDrop from './dragimage';


const validationSchema = yup.object({
    url: yup
    .string('Enter your URL')
    .required('URL is required'),
    name: yup
      .string('Enter your Name')
      .required('Name is required'),
      id: yup
      .string('Enter your Id')
      .required('Id is required'),
   
  
  });
  const useStyles = makeStyles((theme) => ({
      form:{
        
        padding:theme.spacing(2),
        
         
      },
     
     
      save:{
          color:"white",
          marginLeft:theme.spacing(1)

      },
      input:{
          marginTop:theme.spacing(2)
      },
      add:{
        justifyContent:"end"

      },
      drag_uploader:{
      
        justifyContent:"center",
   
      }
     ,
      buttons:{
          marginTop:theme.spacing(4),
          position:"end",
          justifyContent:"end",
          alignItems:"end",
          textAlign:'end'
      }
   
  }))
export default function Addfile(){

    const classes = useStyles();

    const [open2, setOpen2] = useState(false);
    
        
      const handleClickOpen2 = (value) => {
        setOpen2(true);
        
      };
    
      const handleClose2 = () => {
        setOpen2(false);
      };
      
    const formik = useFormik({
        initialValues: {
          id: '',
          name: '',
          url:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          toast("Successfully added");
         formik.resetForm();
      },
    
      });
     
    return(
        <>
      
        <Tooltip title="Add" className={classes.add}>
          <Button onClick={handleClickOpen2}>

          Add Portfolio
        <AddCircleOutlineIcon  style={{color:"#19ad9c",marginLeft:"5px"}}  />
        </Button>
        </Tooltip>
      
        <Dialog
             open={open2}
             onClose={handleClose2}
             aria-labelledby="alert-dialog-title"
             aria-describedby="alert-dialog-description"
         
             >
               <div  className={classes.form}>
               <DialogTitle>
                   Add Portfolio
                   </DialogTitle>
                 
            <DialogContent>
            <form onSubmit={formik.handleSubmit} >
           
       
      
           <TextField
            fullWidth
             id="name"
             name="name"
             label="Enter Name..."
             value={formik.values.name}
             onChange={formik.handleChange}
             error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            
           
           />
           <TextField
            fullWidth
            id="url"
            name="url"
             label="Enter url..."
             value={formik.values.url}
             onChange={formik.handleChange}
             error={formik.touched.url && Boolean(formik.errors.url)}
              helperText={formik.touched.url && formik.errors.url}
            />
           
           
             <div className={classes.drag_uploader}>
            < DragAndDrop/>
            </div>
             <div className={classes.buttons}>
             <Button onClick={handleClose2}  variant="contained"  >
            Cancel
          </Button>
             <Button color="primary" variant="contained" className={classes.save}  style={{backgroundColor: '#19ad9c', color: 'white'}} type="submit" >
                                       Submit
                                    </Button>
        
          <ToastContainer  hideProgressBar toastStyle={{backgroundColor:"green"}}/>
          </div>
             </form>

            
      
          </DialogContent>
          
          
          </div>
          </Dialog>
                          
                        
            

            
       
       </>
    )
}