import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  handleClick(event){
    var apiBaseUrl = "http://localhost:8080/login_check.php?";
    console.log("values=",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "email":this.state.email,
    "password":this.state.password
    }
    var name=this.state.first_name;
    axios.get(apiBaseUrl+"&email="+this.state.email+"&password="+this.state.password)
   .then(function (response) {
     console.log(response);
     if(response.status == 200){
      //  if(response.data=="Hi there welcome to the login"){
      //    var welcome_message = 'Hi '+name + ', You are logged in'
      //    alert(welcome_message)
      //  } else {
      //    alert(response.data);
      //  };
      alert(response.data);
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div style={{textAlign:'center',border:'1px solid #dedbd1',marginLeft: '30%',marginRight: '30%',padding: '10px',borderRadius: '25px'}}>
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