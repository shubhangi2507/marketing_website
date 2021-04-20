/* eslint-disable */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }
  handleClick(event){
    var apiBaseUrl = "http://localhost/api.php";
    console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "first_name": this.state.first_name,
    "last_name":this.state.last_name,
    "email":this.state.email,
    "password":this.state.password
    }
    var name=this.state.first_name;
    axios.get(apiBaseUrl+"?firstname="+this.state.first_name+"&lastname="+this.state.last_name+"&email="+this.state.email+"&password="+this.state.password)
   .then(function (response) {
     console.log(response);
     if(response.status == 200){
       if(response.data=="new user inserted"){
         var welcome_message = 'Welcome '+name
         alert(welcome_message)
       } else if(response.data=="user already exists"){
         alert(response.data);
       };
     }
   })
   .catch(function (error) {
     console.log(error);
     alert(error)
   });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div style={{textAlign:'center',border:'1px solid #dedbd1',marginLeft: '30%',marginRight: '30%',padding: '10px',borderRadius: '25px'}}>
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={{backgroundColor:'black'}} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default Register;