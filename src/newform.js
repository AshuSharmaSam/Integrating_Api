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
const validationSchema = yup.object({
    name: yup
      .string('Enter your Name')
      .required('Name is required'),
     
    description: yup
      .string('Enter Description')
      
      .required('Description is required'),
  });
  const useStyles = makeStyles((theme) => ({
      form:{
         padding:theme.spacing(4)
          

         
      },
     
      save:{
          color:"white",
          marginLeft:theme.spacing(1)

      },
      add:{
        marginLeft:theme.spacing(8)

      },
    
     
     
      buttons:{
          marginTop:theme.spacing(4),
          position:"end",
          justifyContent:"end",
          alignItems:"end",
          textAlign:'end'
      }
   
  }))
export default function Forms(){

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
          description:''
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
        Add Services
        <AddCircleOutlineIcon style={{color:"#19ad9c",marginLeft:"5px"}}   />
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
                   Add Service
                   </DialogTitle>
            <DialogContent>
              
            <form onSubmit={formik.handleSubmit} >
            
       
      
           <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            
             id="name"
             name="name"
             label="Enter Name..."
             value={formik.values.name}
             onChange={formik.handleChange}
             error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            
            
           
           />
           
             <TextField
              variant="outlined"
              margin="normal"
             fullWidth
             id="description"
             name="description"
             label="Enter Description..."
             type="decription"
             value={formik.values.description}
             onChange={formik.handleChange}
             error={formik.touched.description && Boolean(formik.errors.description)}
             helperText={formik.touched.description && formik.errors.description}
             
            

             />
             <div className={classes.buttons}>
             <Button onClick={handleClose2}  variant="contained"  >
            Cancel
          </Button>
             <Button color="primary" variant="contained" className={classes.save}  style={{backgroundColor: '#19ad9c', color: 'white'}} type="submit" >
                                       Submit
                                    </Button>
         
          <ToastContainer autoClose={2000} position="bottom-left" hideProgressBar toastStyle={{backgroundColor:"green"}} />
          </div>
             </form>

            
      
          </DialogContent>
          
          
          </div>
          </Dialog>
                   
                        
            

            
       
       </>
    )
}