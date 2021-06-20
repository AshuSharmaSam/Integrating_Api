import React, {Component} from 'react';
import {DropzoneArea} from 'material-ui-dropzone';
import { withStyles } from '@material-ui/core/styles';
const useStyles = theme => ({
   drop:{
       
       marginTop:theme.spacing(3),
       width:"100%",
      
   },
   img:{
       width:"100%",
       height:"50%"
   }
 
})
class Dropzone extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
 
  handleChange(files){
    this.setState({
      files: files
    });
  }
  render(){
    const { classes } = this.props;
    return (
    <div className={classes.drop}>
      <DropzoneArea
        onChange={this.handleChange.bind(this)}
        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
        maxFileSize={5000000}
        className={classes.img}
        />
        </div>
    )
  }
}
 
export default  withStyles(useStyles)(Dropzone);