import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";

import BookDetailPage from './client/BooksList/pages/BookDetailPage';
import BookListPage from './client/BooksList/pages/BookListPage';
import store from './store/store';

import './App.css';

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
