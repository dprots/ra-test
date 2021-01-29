import React, {memo, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Card, CardContent, CircularProgress} from '@material-ui/core';
import {getBook} from '../../../../store/actions/getBook';
import {getCharacter} from '../../../../store/actions';
import './BookDetail.scss';

const BookDetail = () => {
  const dispatch = useDispatch();
  const {id}:any = useParams();

  useEffect(() => {
    dispatch(getBook(id))
  }, [dispatch, id]);

  const book = useSelector((state: any) => state.book);
  const loading = useSelector((state: any) => state.loading);
  const characters = useSelector((state: any) => state.characters);

  const {name, authors, numberOfPages, publisher, mediaType, povCharacters} = book;

  const handleClick = () => {
    if (Object.keys(characters).length === 0) {
      povCharacters.forEach((link: string) => {
        dispatch(getCharacter(link));
      })
    }
  }

  const charactersElement = loading ? <CircularProgress disableShrink/> :
    characters.map(({name}: any) => <li key={name}>{name}</li>)

  return (
      <Card className='book-detail-card' variant='outlined'>
        <CardContent>
          <h3>{name}</h3>
          <p>Authors: <strong>{authors}</strong></p>
          <p><em>Pages: <strong>{numberOfPages}</strong></em></p>
          <p>Publisher: <strong>{publisher}</strong></p>
          <p>Media type: <strong>{mediaType}</strong></p>
          <p className="book-detail-characters" onClick={handleClick}>Characters:</p>
          <ul className="book-detail-characters-list">{charactersElement}</ul>
        </CardContent>
      </Card>
  );
};

export default memo(BookDetail);