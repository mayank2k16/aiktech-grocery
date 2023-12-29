import { SET_LOGIN, SHOW_LOGIN, SET_USER_DETAILS, SET_TENANT_DETAILS } from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  showLoginPopup: false,
  userDetails: {},
  tenantDetails:{}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOGIN: {
      return {
        ...state,
        ...payload
      };
    }
    case SHOW_LOGIN: {
      return {
        ...state,
        showLoginPopup: !state.showLoginPopup
      }
    }
    case SET_USER_DETAILS: {
      return {
        ...state,
        userDetails: payload
      }
    }
    case SET_TENANT_DETAILS: {
      return {
        ...state,
        tenantDetails: payload
      }
    }
    default:
      return state;
  }
};
