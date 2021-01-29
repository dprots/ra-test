import React from 'react';
import BookList from '../../components/BookList';

import './BookListPage.scss';

const BookListPage = () => {
  return (
    <div>
      <h1 className="book-list-title">Book List</h1>
      <BookList />
    </div>
  );
};

export default BookListPage;