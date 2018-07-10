import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Route } from 'react-router-dom';
import { Auth } from './Auth';

interface FetchArtistDataState {
    artistList: ArtistData[];
    loading: boolean;
}

export class FetchArtist extends React.Component<RouteComponentProps<{}>, FetchArtistDataState> {
    constructor() {
        super();
        this.state = { artistList: [], loading: true };
    }

    logOut = () => {
        localStorage.clear();
        this.setState(() => ({
            loggedOff: !localStorage.length
        }));
    }

    componentDidMount() {
        fetch('api/Artists/Index', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
            }
        })
            .then(function (response) {
                if (response.status === 401) {
                    alert("Please Log In to view.")
                }
                return response;
            }).then(response => response.json() as Promise<ArtistData[]>)
            .then(data => {
                this.setState({ artistList: data, loading: false })
            }).catch(error => {
                this.logOut();
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderArtistTable(this.state.artistList);

        return <div>
            <h1>Artist Data</h1>
            <p>This is the artist data</p>
            {contents}
        </div>;
    }

    //Return HTML table to render() method.
    private renderArtistTable(artistList: ArtistData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {artistList.map(art => {
                    return (<tr key={art.id}>
                        <td>{art.id}</td>
                        <td>{art.firstName}</td>
                        <td>{art.lastName}</td>
                    </tr>)
                }
                )}
            </tbody>
        </table>;
    }
}

export class ArtistData {
    id: number = 0;
    firstName: string = "";
    lastName: string = "";
}

