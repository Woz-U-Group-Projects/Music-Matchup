import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { FetchProject } from "./components/FetchProject";
export var routes = React.createElement(Layout, null,
    React.createElement(Route, { exact: true, path: '/', component: Home }),
    React.createElement(Route, { path: '/counter', component: Counter }),
    React.createElement(Route, { path: '/fetchdata', component: FetchData }),
    React.createElement(Route, { path: '/fetchproject', component: FetchProject }));
//# sourceMappingURL=routes.js.map