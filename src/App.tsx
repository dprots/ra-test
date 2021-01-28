import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import BookListPage from './client/BooksList/pages/BookListPage';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <BookListPage/>
    </div>
    </Provider>
  );
}

export default App;
