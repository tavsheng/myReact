import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
  _callSubscriber() {
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hey there! How are you?', likes: 5 },
        { id: 1, message: "What's up fellow?", likes: 51 },
        { id: 1, message: "Here I am a young man, crashing computer program", likes: 145 }
      ],
      newPostText: 'Put samuraya'
    },
    dialogsPage: {
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
  },


  dispatch (action) {
    this._state.profilePage =
      profileReducer(this._state.profilePage, action)
    this._state.dialogsPage =
      dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state);
  }


}



export default store;