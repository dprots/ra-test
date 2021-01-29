import {FETCH_REQUEST, FETCH_FAILURE, FETCH_BOOKS_SUCCESS} from '../constants';
import API from '../../utils/API';

export const getAllBooks = () => async (dispatch: any) => {
  const url = '/books';
  
  dispatch({type: FETCH_REQUEST});
  try {
    const {data} = await API.get(url);
    dispatch({type: FETCH_BOOKS_SUCCESS, payload: data});
  } catch (err) {
    dispatch({type: FETCH_FAILURE, payload: err});
  }
};
  