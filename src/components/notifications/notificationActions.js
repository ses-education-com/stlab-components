import ActionTypes from "./actionTypes";

export const showMessage = (message, type, autoCloseIn) => {
  return (dispatch) => {
    console.debug("showMessage is dispatching with", dispatch);
    dispatch({
      type: ActionTypes.SHOW_MESSAGE,
      payload: { message, type, autoCloseIn },
    });
  };
};

export const hideMessage = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.HIDE_MESSAGE,
      payload,
    });
  };
};

export const deleteMessage = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.DELETE_MESSAGE,
      payload,
    });
  };
};

export const clearAllMessages = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.CLEAR_ALL_MESSAGES,
    });
  };
};
