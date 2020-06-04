import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {

  posts: [
    { id: 1, message: 'Hey there! How are you?', likes: 5 },
    { id: 2, message: "What's up fellow?", likes: 51 },
    { id: 3, message: "Here I am a young man, crashing computer program", likes: 145 }
  ],
  profile: null,
  status: ''

}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let text = action.newPostElement;
      return {
        ...state,
        posts: [...state.posts, { id: 4, message: text, likes: 0}]
      };

     case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostElement) => ({ type: ADD_POST, newPostElement})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId); 
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
 let response = await profileAPI.getStatus(userId);  
    dispatch(setStatus(response.data));
 }

export const updateStatus = (status) => async (dispatch) => {
  let response= await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0)
    dispatch(setStatus(status));
}

export default profileReducer;