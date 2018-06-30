import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h3>Project Title:</h3>
            <h1>Music Matchup</h1>
                <h3>Project Description:</h3>
                <p>For our project, we decided to create a Music Matchup application that will allow users to keep track of individual artists, and the various bands that they have been associated with. Users would be able to register, and once registered, would be able to add/remove artists and bands, and associate which artists were ever a part of which bands.</p>
        </div>;
    }
}
