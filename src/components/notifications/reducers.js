import A from "./actionTypes";
import uniquid from "uniquid";

const initialState = {
  ...{
    messages: [], // array of {message: String, type: String (danger|warning|success|info)}
    maxMessages: 5,
  },
  // overwrite values from local state, if any
  // ...localStorageState,
};

export default (state, action) => {
  state =
    typeof state === "object"
      ? { ...initialState, ...state }
      : { ...initialState };
  let { messages, maxMessages } = state;
  let nowReadable = new Date().toGMTString();
  let message, tmpMessages, messageIndex;
  const { type, payload } = action;
  let updatedState = { ...state };
  switch (type) {
    case A.SHOW_MESSAGE:
      if (Array.isArray(messages)) {
        // todo: validate payload type

        // console.debug("show message", payload);
        messages = [
          ...messages,
          { ...payload, id: uniquid("msg_"), timestamp: nowReadable },
        ];
        if (messages.length > maxMessages) {
          // cut the beginning to max messages number
          messages = messages.slice(-maxMessages);
        }
        updatedState = { ...state, messages };
      }
      break;
    case A.DELETE_MESSAGE:
      if (Array.isArray(messages) && messages.length > 0) {
        messageIndex = messages.findIndex((m) => m.id === payload) || 0;

        // need this to avoid errors on assigning element
        tmpMessages = [...messages];
        tmpMessages.splice(messageIndex, 1);

        messages = [...tmpMessages];

        updatedState = { ...state, messages };
      }
      break;

    case A.HIDE_MESSAGE:
      if (Array.isArray(messages) && messages.length > 0) {
        messageIndex = messages.findIndex((m) => m.id === payload) || 0;

        console.debug("hiding message", messageIndex, payload);

        // need this to avoid errors on assigning values
        tmpMessages = [...messages];
        message = tmpMessages[messageIndex];
        tmpMessages[messageIndex] = { ...message, hidden: true };
        messages = [...tmpMessages];

        updatedState = { ...state, messages };
      }
      break;

    case A.CLEAR_ALL_MESSAGES:
      if (Array.isArray(messages) && messages.length > 0) {
        messages = [];
        updatedState = { ...state, messages };
      }
      break;
    default:
    //newState = state;
  }
  return updatedState;
};
