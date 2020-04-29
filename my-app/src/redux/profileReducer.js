const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

  posts: [
    { id: 1, message: 'Hey there! How are you?', likes: 5 },
    { id: 1, message: "What's up fellow?", likes: 51 },
    { id: 1, message: "Here I am a young man, crashing computer program", likes: 145 }
  ],
  newPostText: 'Put samuraya'

}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => (
  { type: UPDATE_NEW_POST_TEXT, newText: text })
export default profileReducer;