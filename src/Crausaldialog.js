import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Carousel from 'react-material-ui-carousel'
const useStyles = makeStyles((theme) => ({
  container:{
    width:"100%",
    height:"100%"
  },
  image:{
    width:"100%",
    height:"100%"
  }
 
}));

export default function Dialogboxs(props) {
  const classes = useStyles();

  return (
    <Dialog
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    className={classes.container}

    >
       <Carousel
  NextIcon={'>'}
  PrevIcon={'<'}
  >{
    props.item.map( (item, i) =><img key={i} src={item.src}  onClick={props.handleClickOpen} className={classes.image}/> )
    }
   
</Carousel>
    </Dialog>
    
  );
}
