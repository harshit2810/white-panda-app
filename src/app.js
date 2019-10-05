import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';
import DashboardPage from './components/DashboardPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, appRoot);
    hasRendered = true;
  }
};


const appRoot = document.getElementById('app');
ReactDOM.render(<LoadingPage />, appRoot);
setTimeout(() => {
    renderApp();
}, 0);

// firebase.auth().onAuthStateChanged((user) => {
//     setTimeout(()=> {
//         if (user) {
//             store.dispatch(login(user.uid));
//             renderApp();
//             if (history.location.pathname === '/') {
//               history.push('/dashboard');
//             }
//           } else {
//             store.dispatch(logout());
//             renderApp();
//             history.push('/');
//           }
//     }, 0);
// });
