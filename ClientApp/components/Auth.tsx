import * as React from 'react';
import { NavMenu } from './NavMenu';
import { RouteComponentProps } from 'react-router';



export interface LoginState {
    loggedOff: boolean;
}

export class Auth extends React.Component<RouteComponentProps<{}>, LoginState> {
    constructor() {
        super();
        this.state = { loggedOff: false };
    }
}