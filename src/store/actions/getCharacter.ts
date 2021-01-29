import {FETCH_REQUEST, FETCH_FAILURE, FETCH_CHARACTER_SUCCESS} from '../constants';
import API from '../../utils/API';

export const getCharacter = (link:string) => async (dispatch: any) => {
  const url = `/characters/${link.match(/\d+/)}`;

  dispatch({type: FETCH_REQUEST});
  try {
    const {data} = await API.get(url);
    dispatch({type: FETCH_CHARACTER_SUCCESS, payload: data});
  } catch (err) {
    dispatch({type: FETCH_FAILURE, payload: err});
  }
};