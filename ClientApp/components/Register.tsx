import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Route } from 'react-router-dom';
import { History } from 'history';

interface RegistrationDataState {
  username: string;
  email: string;
  password: string;
  err: string;
  results: any;
  registrationStatus: string;
}

export class Registration extends React.Component<RouteComponentProps<{}>, RegistrationDataState> {
  constructor() {
    super();
    this.state = {err: '', username: '', password: '', email: '', results: { }, registrationStatus: "not set" };
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
    // console.log("Clicked!");
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(
      response => { (response.status === 201) ? this.setState({ registrationStatus: "success" }) : this.setState({ registrationStatus: "fail" });
      return response.json();
      })
    .then(
      response => { this.setState({ results: response });
        // console.log(response);
        let err = [];
        if (response.Username) {
          err.push(response.Username[0]);
        }
        if (response.Email) {
          err.push(response.Email[0]);
        }
        if (response.Password) {
          err.push(response.Password[0]);
        }
        this.setState({ err: err.join('\n')})
      }
    )
  }

  public registrationMessage() {
    if (this.state.registrationStatus === "success") {
      return "Successfully registered!";
    } else if (this.state.registrationStatus === "fail") {
      return "Registration failed, please address the following errors: ";
    } else {
      return "";
    }
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
      <div className="results">{this.registrationMessage()}</div>
      <div className="results">{this.state.err}</div>
    </div>;
  }
}

export class RequestResult {
  password: string = "";
  username: string = "";
  email: string = "";
}