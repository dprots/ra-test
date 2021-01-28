import {FETCH_FAILURE} from '../constants';

export const fetchFailure = (payload:any) => {
  return {
    type: FETCH_FAILURE,
    payload
  }
}