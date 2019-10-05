import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={() => {
            return (<div>
                <Sidebar />
                <Header />
                <DashboardPage />
                <Footer />
            </div>)
        }} exact={true}/>
        <Route component={() => {
            return (<div>
                <Sidebar />
                <Header />
                <NotFoundPage />
            </div>)
        }}/>
      </Switch>
  </div>
  </Router>
);

export default AppRouter;
