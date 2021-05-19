import './App.css';
import React from "react";
import axios from 'axios';
import Table  from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
class First extends React.Component {
  
  state = {
    name: '',
    username:'',
    email:'',
    phone:'',
    items:[],
    id:''
  }
  handleChange1 = event => {
    this.setState({ name: event.target.value });
  }
  handleChange2 = event => {
    this.setState({ username: event.target.value });
  }
  handleChange3 = event => {
    this.setState({ email: event.target.value });
  }
  handleChange4 = event => {
    this.setState({ phone: event.target.value });
  }
  handleChange5 = event => {
    this.setState({ id: event.target.value });
  }
 
 
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        let  items = res.data;
        this.setState({ items });
      })
  }
   handleSubmit = event => {
    event.preventDefault();

     let user= {
       id:this.state.id,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      username: this.state.username
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`,{user})
      .then(res => {
        console.log(res.data)
        
        this.setState(prevState => ({
        items: [...prevState.items, user]
      }))

       
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
        <div>
        <form onSubmit={this.handleSubmit}>
        <label>
            Id:
            <input type="text" name="id" onChange={this.handleChange5} />
          </label>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange1} />
          </label>
          <label>
            User Name:
            <input type="text" name="username" onChange={this.handleChange2} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange3} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" onChange={this.handleChange4} />
          </label>
          <button type="submit">Add</button>
        </form>
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
</div>
      );
    }
}


export default First;