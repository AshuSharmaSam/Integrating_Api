import React from 'react';
import axios from 'axios';
import Table  from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Second extends React.Component {
  state = {
    name: '',
    username:'',
    email:'',
    phone:'',
    items:[]
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
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


  handleSubmit = event => {
    event.preventDefault();

    const items = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      username: this.state.username
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { items })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
      </tr>
      )
    })}
    
   
    
    
  </tbody>
</Table>

        
      </div>
    )
  }
}