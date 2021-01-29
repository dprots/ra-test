import {FETCH_REQUEST, FETCH_FAILURE, FETCH_BOOK_SUCCESS} from '../constants';
import API from '../../utils/API';

export const getBook = (id:number) => async (dispatch: any) => {
  const url = `/books/${id}`;
  
  dispatch({type: FETCH_REQUEST});
  try {
    const {data} = await API.get(url);
    dispatch({type: FETCH_BOOK_SUCCESS, payload: data});
  } catch (err) {
    dispatch({type: FETCH_FAILURE, payload: err});
  }
};
