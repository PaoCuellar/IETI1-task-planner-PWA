import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import './Login.css'
import {Link} from "@material-ui/core";


export class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {user : '', password : ''}
        this.handleOnChangeUser = this.handleOnChangeUser.bind(this);
        this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
        this.state = {
            isLoggedIn: localStorage.getItem("isLoggedIn")
        }
        this.changeIsLoggedIn = this.changeIsLoggedIn.bind(this);
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <form className="form" onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="user">User</InputLabel>
                                <Input id="user" name="user" autoComplete="user" autoFocus onChange = {this.handleOnChangeUser} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleOnChangePassword}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className="submit">
                                Login
                            </Button>

                            <Link style={{marginTop: 15, color:"#601E51"}}
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}>
                                Create Account
                            </Link>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    changeIsLoggedIn(){
        this.setState({ isLoggedIn : true });
        localStorage.setItem("isLoggedIn", true );
    }

    handleOnChangeUser(event){
        this.setState({user : event.target.value});
    }

    handleOnChangePassword(event){
        this.setState({password : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(localStorage.getItem("user") === this.state.user && localStorage.getItem("password") === this.state.password){
            this.props.changeIsLoggedIn();
        }
    }
}