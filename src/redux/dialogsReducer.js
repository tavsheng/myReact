

const SEND_MESSAGE = 'SEND-MESSAGE';

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

}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

      case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };

    default:
      return state;
  }
}

export const sendMessageActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })
export default dialogsReducer;