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
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import FilterListIcon from '@material-ui/icons/FilterList';
import Searches from "./Search.js";
import Selector from "./Selector";
import Datas  from './port.js'

import Deletes from './Deletes';

import Addfile from './Addfile';
import { useFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useHistory } from "react-router-dom";

import Dialogboxs from './Crausaldialog.js';
const validationSchema = yup.object({
  name: yup
    .string('Enter your Name')
    .required('Name is not changed'),
 
  description: yup
    .string('Enter Description')
    
    .required('Description is not changed'),
});
function createData(id, name, url, src) {
  return { id, name, url , src };
}

const rows =  Datas.map((item,index) => (
  createData(item.id,item.name,item.url,item.src)
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
  { id: 'id', numeric:true, disablePadding: true, label: 'ID'},
  { id: 'name', numeric: false, disablePadding: false, label: 'NAME' },
  { id: 'url', numeric: false, disablePadding: false, label: 'URL' },
  { id: 'image', numeric: false, disablePadding: false, label: 'IMAGE' },
  { id: 'Action', numeric:false, disablePadding: false, label: 'ACTION'},
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
          <IconButton aria-label="filter list">
          <Selector icon={< FilterListIcon style={{color:"black"}}/>} select={"Filter"} item1={"id"} item2={"Name"} />
          </IconButton>
        </Tooltip>
        <Addfile />
       
      </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor:"white"
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table2:{
    border:"0.1px solid black",
    fontFamily: "Times New Roman, Times, serif",
  },
  table3:{
    border:"0.1px solid black",
    fontFamily: "Times New Roman, Times, serif",
  },
  table5:{
    width:"30%",
    
    padding:"0px",
    border:"0.1px solid black"
  },
  table1:{
    border:"0.1px solid black",
    fontFamily: "Times New Roman, Times, serif",
  },
  table4:{
   width:"3%",
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
img:{
  width:"100%"
},

save:{
    color:"white",
    marginRight:theme.spacing(1)

},


buttons:{
    marginTop:theme.spacing(4),
    position:"end",
    justifyContent:"end",
    alignItems:"end",
    textAlign:'end'
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

export default function Portfolio() {
  const history = useHistory();
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  
  const [open2, setOpen2] = React.useState(false);
    

  const handleClose2 = () => {
    setOpen2(false);
  };
  
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
  const handleClickOpen2 = (value) => {
    setOpen2(true);
    
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
    
      name: '',
      description:''
    },
  
    validationSchema: validationSchema,
    onSubmit: (values) => {
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
                     
                      <TableCell component="th"  scope="row"  align="center" className={classes.table1}>
                        {row.id}
                      </TableCell>
                      <TableCell align="center" className={classes.table3}>{row.name}</TableCell>
                      <TableCell align="center" className={classes.table2}>{row.url}</TableCell>
                     <TableCell align="center" className={classes.table5}>
                
                    <img src={row.src} className={classes.img} onClick={() => {handleClickOpen2(row)}} />
                           
                            
                          
                   
                     <Dialogboxs item={rows} open={open2} handleClose={handleClose2} handleOpen={handleClickOpen2}/>
                     
                
                      
                           
                           
                       
                     </TableCell>
                      <TableCell   align="center" className={classes.table4}>

                      <Deletes/>
                      
                      
    
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
