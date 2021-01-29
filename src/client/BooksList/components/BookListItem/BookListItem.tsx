import React from 'react';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './BookListItem.scss';

const BookListItem = ({url, name, authors, numberOfPages, povCharacters}: Record<string, any>) => {
  const [id] = url.match(/\d+/);

  return (
    <Link className="book-list-link" to={`/books/${id}`}>
      <Card className='book-list-card' variant='outlined'>
        <CardContent>
          <h3>{name}</h3>
          <p>Authors: <strong>{authors.toString()}</strong></p>
          <p><em>Pages: <strong>{numberOfPages}</strong></em></p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BookListItem;
