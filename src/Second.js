import {React,Component} from 'react';
import axios from 'axios';
import Table  from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
class Second extends Component {

   constructor(props) {
      super(props) 
      this.state = { //state is by default an object
         students: [
            { id: 1, name: 'John', age: 21, email: 'jf@email.com' },
            { id: 2, name: 'Mak', age: 19, email: 'mak@email.com' },
            { id: 3, name: 'Rock', age: 16, email: 'rock@email.com' },
            { id: 4, name: 'Gaurav', age: 25, email: 'Gaurav@email.com' }
         ]
      }
      this.addStudent = this.addStudent.bind(this);
   }
   
   addStudent () {

    const newStudent = { id: 5, name: 'Mayank', age: 31, email: 'mayankd@email.com' };

    this.setState(prevState => ({
        students: [...prevState.students, newStudent ]
      }));
     
   }

   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, age, email } = student //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }

   render() { 
      return (
         <div>
            <h1>React Dynamic Table</h1>
            <table id='students'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
            <button onClick={this.addStudent}>Add Student</button>
         </div>
      )
   }
}

export default Second;