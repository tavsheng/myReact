

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dmitry' },
    { id: 2, name: 'Vadim' },
    { id: 3, name: 'Aleksandr' },
    { id: 4, name: 'Maksim' }
  ],
  messages: [
    { id: 1, message: 'Hi! How are you doing?' },
    { id: 2, message: "What's up bro?" },
    { id: 3, message: "I'm OK. What about you?" },
    { id: 4, message: 'Hi!' }
  ],
  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }]
      };

    default:
      return state;
  }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyActionCreator = (body) => (
  { type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer;