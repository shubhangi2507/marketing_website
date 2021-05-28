
/* eslint-disable */
/*
import React from 'react';


const Contact = () => {
    return (
        <div className="container">
         <h1>Contact</h1>
        </div>
    );
};
*/



import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';



class Contact extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            name: "",
            email: "",
            cnumber: "",
            message: "" ,
            erroMessage: "",
            nameMessage: "",
            emailMessage: "",
            successMessage: "" 
        }
        //this.name = React.createRef();
        //this.email = React.createRef();
        //this.cnumber = React.createRef();
        //this.message = React.createRef();
  
        this.submitData = this.submitData.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
  
      submitData(e) {
        e.preventDefault();
        
        if(this.state.name === "") {
          this.setState({nameMessage : "Please Enter Name."});
        } else if(this.state.email === "") {
          this.setState({emailMessage : "Please Enter Email."});
            this.setState({nameMessage : ""});
        } else if(this.state.message === "") {
          this.setState({errorMessage : "Please Enter Message."});
            this.setState({nameMessage : ""});
            this.setState({emailMessage : ""});
        } else {
          this.setState({errorMessage : ""});
          this.setState({nameMessage : ""});
          this.setState({emailMessage : ""});
          this.setState({successMessage : "Thank You! We Will Contact You Soon."});
        }
      }
  
      handleChange(event) {
        //this.setState({value: event.target.value});
        this.setState({  [event.target.name]  : event.target.value });
      }

      

    render() {
        return (
            <div className=" p-3 my-3 border pad">
          <h1 className="text-info">Contact US</h1> <h3>{this.state.successMessage}</h3>
          <form id="contact-form"  onSubmit={this.submitData}>

            <h3 className=" alert-danger text-danger">{this.state.nameMessage}{this.state.emailMessage}{this.state.errorMessage}</h3>
            
            
            <div className="form-group">
              <label htmlFor="name"><h6>Name</h6></label>
              <input type="text" name="name" id="name" value={this.state.name} ref={this.name} className="form-control"  onChange={this.handleChange} placeholder="Enter Name" />
            </div>
            
            <div className="form-group">
              <label htmlFor="exampleInputEmail1"><h6>Email </h6></label>
              <input type="text" name="email" id="email"  value={this.state.email} ref={this.email} className="form-control"  onChange={this.handleChange} placeholder="Enter Email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="exampleInputEmail1"><h6>Contact Number </h6></label>
              <input type="text" name="cnumber" id="cnumber" value={this.state.cnumber} ref={this.cnumber} className="form-control"  onChange={this.handleChange} placeholder="Enter Contact Number"  />
            </div>

            <div className="form-group">
              <label htmlFor="message"><h6>Message</h6></label>
              <textarea name="message" id="message" className="form-control" rows="5" cols="40" value={this.state.message} ref={this.message} onChange={this.handleChange} placeholder="Enter Message" />
            </div>
            
            <button type="submit" className="btn btn-primary">Contact US</button>
          
          </form>
          </div>
        );
    }
}

//export default ContactusComponent;

export default Contact;
