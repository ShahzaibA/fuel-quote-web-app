import React, { Component } from "react";
import PropTypes from 'prop-types';
import Navbar from './components/nav_bar';
import withStyles from '@material-ui/core/styles/withStyles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    
  });

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            token: ""
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        fetch(`http://138.197.221.30:4000/test`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
        })
        .then(res => res.json())
        .then(result => {this.setState({token: result.data.token}); document.cookie = "token="+result.data.token; console.log(document.cookie.split('=')[1]);console.log(result)})
        .catch(err => console.log(err))
    }

    verifyData(){
        fetch(`http://138.197.221.30:4000/test1`,{
            method: "GET",
            headers: {
                "Authorization": "Bearer "+ this.state.token
            }
        })
        .then(res => res.json())
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    handleUser = event =>{
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const { classes } = this.props;
        return (
            <div>  
                <Navbar />
                <br/><br/><br/><br/>
                <TextField
                        required
                        id="username"
                        name="username"
                        label="Username"
                        value={this.state.username}
                        onChange={this.handleUser}
                        style={{width: "35%",paddingBottom:"8px"}}
                        margin="dense"
                    />
                   
                    <br/>
                    <TextField
                        required
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleUser}
                        label="Password"
                        style={{width: "35%",paddingBottom:"30px"}}
                        type="password"
                        margin="dense"
                    />
                    <br/>
                    <Button onClick={()=>this.getData()}>Submit</Button>
                    <Button onClick={()=>this.verifyData()}>Verify</Button>
            </div>
        );
    }
}

Test.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Test);