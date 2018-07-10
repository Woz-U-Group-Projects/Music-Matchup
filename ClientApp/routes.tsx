import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchProject } from "./components/FetchProject";
import { Registration } from "./components/Register";
import { Login } from "./components/Login";
import { FetchArtist } from "./components/FetchArtist";

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/fetchproject' component={FetchProject} />
    <Route path='/register' component={Registration} />
    <Route path='/login' component={Login} />
    <Route path='/fetchartist' component={FetchArtist} />
</Layout>;
