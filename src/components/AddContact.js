import React from "react";
import { useNavigate } from 'react-router-dom' ;

class AddContact extends React.Component 
{
    state={
        name:'',
        email:''
    };
    
    add=(e)=>{
        e.preventDefault()
         if(this.state.name === "" || this.state.email==="")
         {
            alert('please insert data');
            return;
         }
         this.props.addContactHandler(this.state);
         this.setState({name:'',email:''});
         window.location.replace('/')
    }

  render(){
    return(
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} />
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
  }
}
export default AddContact;