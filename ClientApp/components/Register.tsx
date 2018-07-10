import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Route } from 'react-router-dom';
import { History } from 'history';

interface RegistrationDataState {
  username: string;
  email: string;
  password: string;
  value: string;
  results: object;
}

export class Registration extends React.Component<RouteComponentProps<{}>, RegistrationDataState> {
  constructor() {
    super();
    this.state = {value: '', username: '', password: '', email: '', results: { } };
  }

  public handleUsernameChange(event: any) : void {
    this.setState({ username: event.target.value });
  }
  public handleEmailChange(event: any) : void {
    this.setState({ email: event.target.value });
  }
  public handlePasswordChange(event: any) : void {
    this.setState({ password: event.target.value });
  }

    onRegister = () => {
        console.log("Clicked!");
        try {
      fetch('/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
        })
        alert("User Registered!");
    }
    catch(e) {
        alert(e.message);
    }



      //method: 'POST',
      //headers: {
      //  'Accept': 'application/json',
      //  'Content-Type': 'application/json',
      //},
      //body: JSON.stringify({
      //  username: this.state.username,
      //  email: this.state.email,
      //  password: this.state.password
      //})
    // }).then(response => {
    //   return response.json()
    // }).then(response => { this.setState({ results: response }) });
    // console.log(this.state.results);
    // console.log(this.state.email);
    //}).then(function(response) {
    //  if (response.status === 400 ) {
    //    return response.json()
    //  }
    //}).then(function(object) {
    //  console.log(object)
    //})
  }

  public render() {
    return <div>
      <h1>Registration Page</h1>
      <p>Please fill in the required information below to register</p>
      <div className="input-group">
        <label className="input=group=addon">Username:</label>
        <input className="form-control" type="text" placeholder="Username (at least 3 characters)" id="username" required onChange={ e => this.handleUsernameChange(e) } />
      </div>
      <div className="input-group">
        <label className="input=group=addon">Email Address:</label>
        <input className="form-control" type="text" placeholder="you@example.com" id="email" required onChange={ e => this.handleEmailChange(e) } />
      </div>
      <div className="input-group">
        <label className="input=group=addon">Password:</label>
        <input className="form-control" type="password" placeholder="At least 6 characters" id="password" required onChange={ e => this.handlePasswordChange(e) } />
      </div>
      <button className="btn btn-primary" type="submit" value="submit" onClick={this.onRegister}>Register</button>
    </div>;
  }
}

export class RequestResult {
  password: string = "";
  username: string = "";
  email: string = "";
}