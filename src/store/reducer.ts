import {BookInterface} from '../interfaces/BookInterface';
import {CharacterInterface} from '../interfaces/CharacterInterface';
import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOK_SUCCESS,
  FETCH_CHARACTER_SUCCESS
} from './constants';

export interface IBooksReducer {
  books: [];
  book: {} | BookInterface[];
  characters: [] | CharacterInterface[];
  loading: boolean;
  error: null | Record<string, any>;
}

export const initialState: IBooksReducer = {
  books: [],
  book: {},
  characters: [],
  loading: true,
  error: null
}

export const reducer = (state: any, {type, payload}: any) => {
  const newCharacters = state.characters.map((item: any) => ({...item}));
  
  switch (type) {
    case FETCH_REQUEST:
      return {...state, loading: true, error: null}

    case FETCH_FAILURE:
      return {...state, loading: false, error: payload}

    case FETCH_BOOKS_SUCCESS:
      return {...state, books: payload, loading: false, error: null}

    case FETCH_BOOK_SUCCESS:
      console.log(payload)
      return {...state, book: payload, characters: [], loading: false, error: null}

    case FETCH_CHARACTER_SUCCESS:
      newCharacters.push({name: payload.name})
      return {...state, characters: newCharacters, loading: false, error: null}

    default:
      return state
  }
}
