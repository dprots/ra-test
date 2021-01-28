import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

import {fetchData} from '../../../../store/reducer';

import './BookList.scss';



const BookList = () => {

  const books = useSelector((state: any) => state.books);
  const loading = useSelector((state: any) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData('/books'))
  }, [dispatch]);

  const handleClick = (charLinks:[]) => {
    console.log(charLinks)
    // dispatch(fetchData(`/books/${id}`))
  }


  const bookListElement = loading ? <CircularProgress disableShrink/> : books.map((book: any, index:number) => (
    <Card onClick={() => handleClick(book.povCharacters)} key={index} className='card' variant='outlined'>
      <CardContent>
        <h3>{book.name}</h3>
        <p>{book.authors.join(', ')}</p>
        <p><em>pages: {book.numberOfPages}</em></p>
      </CardContent>
    </Card>
  ))


  return (
    <div className="book-list-container">
      {bookListElement}
    </div>
  );
};

export default BookList;