//Service Table:-All Service Content lies here...
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FilterListIcon from '@material-ui/icons/FilterList';
import Searches from "./Search.js";
import Selector from "./Selector";
import strings  from './comman.json';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Deletes from './Deletes';
import DatePickers from './Date';
import Forms from './newform';
import { useFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DialogTitle } from '@material-ui/core';

const validationSchema = yup.object({
  name: yup
    .string('Enter your Name')
    .required('Name is Required'),
 
  description: yup
    .string('Enter Description')
    
    .required('Description is Required'),
});
function createData(id, name, description, carbs, protein) {
  return { id, name, description, carbs, protein };
}

const rows =  strings.data.map((item,index) => (
  createData(item.id,item.name,item.description)
))

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'id', numeric:true, disablePadding: false, label: 'ID'},
  { id: 'name', numeric: false, disablePadding: false, label: 'NAME' },
  { id: 'description', numeric: false, disablePadding: false, label: 'DESCRIPTION' },
  { id: 'action', numeric:false, disablePadding: false, label: 'ACTION' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            className={classes.table2}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    maxWidth:"100%",
    [theme.breakpoints.down('md')]: {
      
      padding:"none"
    },
  },
  x:{
    flexGrow:1,
    [theme.breakpoints.down('md')]: {
      
      display:"none"
    },
  },
  pick:{
    marginBottom:theme.spacing(2)

  },
  
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <Searches placeholder={"Search"} />
      <Tooltip title="Filter list">
        <IconButton aria-label="filter list" style={{color:"black",backgroundColor:"white"}}>
          <Selector icon={< FilterListIcon style={{color:"black",backgroundColor:"white"}}/>} select={"Filter"} item1={"id"} item2={"Name"} />
        </IconButton>
      </Tooltip>
      <div className={classes.pick} >
        <DatePickers />
      </div>
      <Forms/>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:"100%",
    backgroundColor:"white"
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    fontFamily: "Times New Roman, Times, serif",
  },
  table2:{
    border:"0.1px solid black",
    fontFamily: "Times New Roman, Times, serif",
  },
  table3:{
    width:"10%",
    border:"0.1px solid black",
    fontFamily: "Times New Roman, Times, serif",
  },
  table1:{
    width:"3%",
    border:"0.1px solid black",
    fontFamily: "Times New Roman, Times, serif",
  },
  table4:{
    width:"5%",
    border:"0.1px solid black"
  },
  table:{
    maxWidth:"100%",
    padding:theme.spacing(4),
    border:"0.1px solid black"
  },
  form:{
    padding:theme.spacing(8),
    paddingTop:theme.spacing(2)

   
},

save:{
    color:"white",
    marginLeft:theme.spacing(1),
    backgroundColor:"#19ad9c"
  

},
dia:{
  marginTop:theme.spacing(2)

},


buttons:{
    marginTop:theme.spacing(4),
    position:"end",
    justifyContent:"end",
    alignItems:"end",
    textAlign:'end',
    marginBottom:theme.spacing(2)
},

 
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [i, setId] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleClickOpen = (value) => {
    setOpen(true);
    setId(value)
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  
  
  const formik = useFormik({
    initialValues: {
    
     i
    },
  
    validationSchema: validationSchema,
    onSubmit: () => {
      toast("Successfully changed");
    
  },

  });

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                  <TableRow
                  hover
                  key={row.id}
                     
                  >
                    <TableCell component="th"  scope="row" className={classes.table1}>
                        {row.id}
                    </TableCell>
                    <TableCell align="start" className={classes.table3}>
                      {row.name}
                    </TableCell>
                    <TableCell align="start" className={classes.table2}>
                      {row.description}
                    </TableCell>
                    <TableCell  className={classes.table4}>
                      <Tooltip title="Edit">
                        <EditIcon   style={{color:"#19ad9c",width:"50%"}} onClick={() => {handleClickOpen(row)}}/>
                      </Tooltip>
                      <Deletes/>
                       <Dialog
                      open={open}
                      onClose={handleClose}
                       aria-labelledby="alert-dialog-title"
                       aria-describedby="alert-dialog-description"
                       
                        >
                          <DialogTitle className={classes.dia}> 
                             Edit Services
                            </DialogTitle>
                          <DialogContent >
                          <form onSubmit={formik.handleSubmit} >
                            <TextField
                            variant="outlined"
                            margin="normal"
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
                                fullWidth
                                id="name"
                                label="name"
                                name="name"
                                autoComplete="name"
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                                defaultValue={i.name}
                                autoFocus
                                 />
                                  <TextField
                                  variant="outlined"
                                  margin="normal"
                                  fullWidth
                                  id="description"
                                  label="description"
                                  name="description"
                                  autoComplete="description"
                                  onChange={formik.handleChange}
                                  error={formik.touched.description && Boolean(formik.errors.description)}
                                  helperText={formik.touched.description && formik.errors.description}
                                  defaultValue={i.description}
                                  autoFocus
                                  />
                                  <div className={classes.buttons}>
                                    <Button onClick={handleClose}  variant="contained"  >
                                       Cancel
                                    </Button>
                                    <Button 
                                     variant="contained" className={classes.save} style={{backgroundColor: '#19ad9c', color: 'white'}} type="submit" >
                                       Submit
                                    </Button>
                                  </div>
                                  <ToastContainer autoClose={2000} hideProgressBar toastStyle={{backgroundColor:"green"}} />
                                </form>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                        );
                        })}
                        {emptyRows > 0 && (
                        <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                <TablePagination
                rowsPerPageOptions={[5,10, 20,30]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                />
                <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense}/>}
                label="Dense padding"
                className={classes.dense}
                />
                </Paper>
     
    </div>
  );
}
