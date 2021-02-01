import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import ListIcon from '@material-ui/icons/List';
import {useDispatch} from 'react-redux';

import {SWITCH_VIEW_MODE} from '../../../../store/constants';

import './SwitchView.scss'

const SwitchView = () => {
  const dispatch = useDispatch();

  return (
    <div className="switch-view">
      <AppsIcon onClick={() => dispatch({type: SWITCH_VIEW_MODE, payload: 'tails'})}/>
      <ListIcon onClick={() => dispatch({type: SWITCH_VIEW_MODE, payload: 'table'})}/>
    </div>
  );
};

export default SwitchView;