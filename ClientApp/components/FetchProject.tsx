﻿import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Route, Redirect } from 'react-router-dom';
//import { ArtistData } from './FetchArtist';
import { Auth } from './Auth';

interface FetchProjectDataState {
    projList: ProjectData[];
    loading: boolean;
}

export class FetchProject extends React.Component<RouteComponentProps<{}>, FetchProjectDataState> {
    constructor() {
        super();
        this.state = { projList: [], loading: true };
    }

    logOut = () => {
        localStorage.clear();
        this.setState(() => ({
            loggedOff: !localStorage.length
        }));
    }

    handleLogOff = () => {
        this.logOut();
    }

    componentDidMount() {
        fetch('api/Project/Index', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
            }
        })
            .then(function (response) {
                if (response.status === 401) {
                    alert("Please Log In to view.")
                }
                return response;
            }).then(response => response.json() as Promise<ProjectData[]>)
            .then(data => {
                this.setState({ projList: data, loading: false })
            }).catch(error => {
                this.logOut();
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderProjectTable(this.state.projList);


        return <div>
            <h1>Project Data</h1>
            <p>This is the project data</p>
            {contents}
        </div>;
    }

    //Return HTML table to render() method.
    private renderProjectTable(projList: ProjectData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {projList.map(proj =>
                    <tr key={proj.id}>
                        <td>{proj.id}</td>
                        <td>{proj.name}</td>
                        <td>{proj.description}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

export class ProjectData {
    id: number = 0;
    name: string = "";
    description: string = "";
}

