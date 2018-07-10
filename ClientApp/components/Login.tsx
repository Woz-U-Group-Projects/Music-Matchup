import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Route, Redirect } from 'react-router-dom';
import { History } from 'history';

interface LoginDataState {
    username: string;
    token: object;
    password: string;
    err: string;
    results: object;
    loginStatus: string;
}

export class Login extends React.Component<RouteComponentProps<{}>, LoginDataState> {
    constructor() {
        super();
        this.state = { err: '', username: '', password: '', token: [], results: {}, loginStatus: "" };
    }

    //*****************************************************************

    onLogin = () => {
        console.log("Clicked!");
        try {
            fetch('api/Login/token', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
                .then(
                    response => {
                        (response.status === 200) ? this.setState({ loginStatus: "success" }) : this.setState({ loginStatus: "fail" });
                        return response.json();
                    })
                .then(
                    response => {
                        localStorage.setItem('auth_token', response);
                        //this.props.history.push('/FetchProject')
                    })
        }
        catch (e) {
            alert(e.message);
        }
    }

    //*****************************************************************


    public handleUsernameChange(event: any): void {
        this.setState({ username: event.target.value });
    }

    public handlePasswordChange(event: any): void {
        this.setState({ password: event.target.value });
    }

    //onLogin = () => {
    //    console.log("Clicked!");
    //    try {
    //        fetch('api/Login/token', {
    //            method: 'POST',
    //            headers: {
    //                'Accept': 'application/json',
    //                'Content-Type': 'application/json',
    //            },
    //            body: JSON.stringify({
    //                username: this.state.username,
    //                password: this.state.password
    //            })
    //        })
    //            .then(
    //                response => {
    //                    (response.status === 200) ? this.setState({ loginStatus: "success" }) : this.setState({ loginStatus: "fail" });
    //                    return response.json();
    //                })
    //            .then(
    //            response => {
    //                    this.setState({ results: response });
    //                    return this.state.results;
    //            })
    //    }
    //    catch (e) {
    //        alert(e.message);
    //    }
    //}


    public loginMessage() {
        if (this.state.loginStatus === "success") {
            return "Login successful!";
        } else if (this.state.loginStatus === "fail") {
            return "You dun messed up A A Ron: Your username or password is incorrect. ";
        } else {
            return "";
        }
    }

    public render() {
        return <div>
            <h1>Login Page </h1>
            <p> Please fill in the required information below to log in </p>
            <div className="input-group">
                <label className="input=group=addon">Username:</label>
                <input className="form-control" type="text" placeholder="Username (at least 3 characters)" id="username" required onChange={e => this.handleUsernameChange(e)} />
            </div>
            <div className="input-group">
                <label className="input=group=addon">Password:</label>
                <input className="form-control" type="password" placeholder="At least 6 characters" id="password" required onChange={e => this.handlePasswordChange(e)} />
            </div>
            <button className="btn btn-primary" type="submit" value="submit" onClick={this.onLogin}>Login</button>
            <div className="results">{this.loginMessage()}</div>
            <div className="results">{this.state.err}</div>
        </div>;
    }
}

export class JwtToken {
    token: string = "";
}



