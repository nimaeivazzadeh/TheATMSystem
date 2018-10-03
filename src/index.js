import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';


import registerServiceWorker from './registerServiceWorker';
import store from './store'


import App from './App';
import MainPage from './Component/NavMain/mainPage';
import CardManagement from './Component/card-managment/card-managment-index';
import ProfileScreen from './Component/profile/profile-screen';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
            <Provider store={ store }>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={ App }/>
                        <Route exact path='/MainPage' component={ MainPage } />
                        <Route exact path='/ProfileScreen' component={ProfileScreen}/>
                        <Route exact path='/CardManagement' component= {CardManagement}/>
                    </Switch> 
                </HashRouter>
            </Provider>, 
            document.getElementById('root'));
                
registerServiceWorker();
