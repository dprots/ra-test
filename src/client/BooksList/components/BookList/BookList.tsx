import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import BookListItem from '../BookListItem';

import './BookList.scss';
import {getAllBooks} from '../../../../store/actions';
import SwitchView from '../SwitchView';

const BookList = () => {

  const books = useSelector((state: any) => state.books);
  const loading = useSelector((state: any) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (books.length === 0) {
      dispatch(getAllBooks())
    }
  }, [dispatch, books.length]);

  const bookListElement: JSX.Element = loading ? <CircularProgress disableShrink/> :
    books.map((book: any, index: number) =>
      <BookListItem key={index} {...book} />
    )

  return (
    <div className="book-list-container">
      <SwitchView/>
      {bookListElement}
    </div>
  );
}

export default BookList;
