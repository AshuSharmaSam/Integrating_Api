import './App.css';
import React from "react";
import axios from 'axios';
import Table  from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
class First extends React.Component {
  
  state ={
    
      items: []
  }
  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }
    deleteRow(id, e){  
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)  
      .then(res => {   
    
        const items = this.state.items.filter(data => data.id !== id);  
        this.setState({ items });  
      })  
    
  }  
  
  render() {
      return (
        <Table striped bordered hover>
  
  <thead>
    <tr>
      <th>id</th>
      <th>Name</th>
      <th>UserName</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    {this.state.items.map((item)=>{
      return(
        <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td><button className="btn btn-danger" onClick={(e) => this.deleteRow(item.id, e)}>Delete</button> </td>
        </tr>
      )
    })}
    
   
    
    
  </tbody>
</Table>

      );
    }
  }


export default First;