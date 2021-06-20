import {React,Component} from 'react';
import axios from 'axios';
import {Container,Row,Col,Table,Form,Button}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
class Second extends Component {
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
render(){
   
   return(
   <Container className="cot">
      <Row>
         <Col xs={3} className="column">
           
           <Row>
            <Form className="form" onSubmit={this.handleSubmit}>
               <Form.Control  id="x" type="id"  name="id" placeholder="id" onChange={this.handleChange5} />
               <Form.Control id="x" type="name"  name="name" placeholder="Enter name" onChange={this.handleChange1}/> 
               <Form.Control id="x" type="email" name="email" placeholder="Enter email" onChange={this.handleChange2} />
               <Form.Control id="x" type="phone" name="phone" placeholder="Enter phone" onChange={this.handleChange3} />
               <Form.Control  id="x" type="username" name="username" placeholder="Enter usename" onChange={this.handleChange4} /> 
               
               <Button variant="primary" type="submit">
                  Submit
               </Button>
            </Form>
            </Row>
         </Col>
         <Col xs={9}  className="column">
           <Row>
             <Col xs={6}>
            <input type="text" value="Search By Name"/>
            </Col>
            <Col xs={6}>
            <input type="text" value="Search By UserName"/>
            </Col>
            </Row>
            <Row>
            <Table striped bordered hover>
               <thead>
                  <tr >
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
                        </Row>
         </Col>
      </Row>
   </Container>
   )
}
}

export default Second;