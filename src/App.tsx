import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './App.css';
import BookDetailPage from './client/BooksList/pages/BookDetailPage';
import BookListPage from './client/BooksList/pages/BookListPage';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact path="/">
            <BookListPage/>
          </Route>
          <Route exact path="/books/:id">
            <BookDetailPage />
          </Route>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
