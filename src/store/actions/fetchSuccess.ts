import {FETCH_SUCCESS} from '../constants';

export const fetchSuccess = (payload:any) => {
  return {
    type: FETCH_SUCCESS,
    payload
  }
}