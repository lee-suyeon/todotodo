import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoCalendar from './routes/todo-calendar/TodoCalendar';
import TodoList from './routes/todolist/TodoList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/app.scss';

function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        <Header />
      </div>

      <div className="app-main-content">
        <Switch>
          <Route exact path= "/" component={TodoCalendar} />
          <Route exact path="/todolist" component={TodoList} />
        </Switch>
      </div>

      <div className="app-footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
