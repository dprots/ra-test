import React from 'react';
import {useSelector} from 'react-redux';
import BookList from '../../components/BookList';
import BookListTable from '../../components/BookListTable';

import './BookListPage.scss';

const BookListPage = () => {

  const viewMode = useSelector((state: any) => state.viewMode);
  // const viewElement: JSX.Element = viewMode === 'tails' ? <BookList /> : <BookListTable />

  return (
    <div>
      <h1 className="book-list-title">Book List</h1>
      {viewMode === 'tails' && <BookList/>}
      {viewMode === 'table' && <BookListTable/>}
      {/*{viewElement}*/}
    </div>
  );
};

export default BookListPage;