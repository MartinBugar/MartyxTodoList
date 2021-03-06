import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import User from './components/User';
import UserDetail from './components/UserDetail';
import UserDetailEdit from './components/UserDetailEdit';
import UserTasksCreate from './components/UserTasksCreate';
import UserTasksEdit from './components/UserTasksEdit';
import UserTasks from './components/UserTasks';
import CreateUser from './components/CreateUser';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import 'react-app-polyfill/stable';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home} />
               <Route path="/about" component={About} />
               <Route path="/user" exact component={User} />
               <Route path="/user/create" exact component={CreateUser}/>
               <Route path="/user/:id/usertasks/create" exact component={UserTasksCreate}/>
               <Route path="/user/:id/usertasks/edit/:taskId" exact component={UserTasksEdit}/>
               <Route path="/user/:id/usertasks" exact component={UserTasks}/>
               <Route path="/user/:id/edit" exact component={UserDetailEdit}/> 
               <Route path="/user/:id" exact component={UserDetail}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
