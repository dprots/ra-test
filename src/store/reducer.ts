import {BookInterface} from '../interfaces/BookInterface';
import { CharacterInterface } from '../interfaces/CharacterInterface';
import API from '../utils/API';
import {fetchFailure, fetchRequested, fetchSuccess } from './actions';
import {FETCH_REQESTED, FETCH_SUCCESS, FETCH_FAILURE} from './constants';

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

export const reducer = (state: any, action: any) => {
  switch (action.type) {

    case FETCH_REQESTED:
      return {...state, loading: true, error: null}

    case FETCH_SUCCESS:
      return {...state, books: action.payload, loading: false, error: null}

    case FETCH_FAILURE:
      return {...state, loading: false, error: action.payload}

    default:
      return state
  }
}

export const fetchData = (url:string) => async (dispatch:any) => {
  try {
    dispatch(fetchRequested());
    const {data} = await API.get(url);
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchFailure({error}))
  }
}
