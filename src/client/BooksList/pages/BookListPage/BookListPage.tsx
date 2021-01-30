import React from 'react';
// import BookList from '../../components/BookList';
import BookListTable from '../../components/BookListTable';

import './BookListPage.scss';

const BookListPage = () => {
  return (
    <div>
      <h1 className="book-list-title">Book List</h1>
      <BookListTable />
    </div>
  );
};

export default BookListPage;