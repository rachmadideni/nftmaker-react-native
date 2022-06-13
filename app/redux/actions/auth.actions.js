import { createAction } from 'redux-actions';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../types';

export const authActionsCreator = {
  loginRequest: createAction(LOGIN_REQUEST),
  loginSuccess: createAction(LOGIN_SUCCESS),
  loginError: createAction(LOGIN_ERROR),

  registerRequest: createAction(REGISTER_REQUEST),
  registerSuccess: createAction(REGISTER_SUCCESS),
  registerError: createAction(REGISTER_ERROR),
};
