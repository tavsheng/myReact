import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/validators/objectsHelper';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGLE_IS_FETCHING = 'TOGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []

}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray (state.users, action.userId, 'id', {followed: true})
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray (state.users, action.userId, 'id', {followed: false})
      }
    case SET_USERS:
      return {
        ...state, users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state, totalUsersCount: action.count
      }
    case TOGLE_IS_FETCHING:
      return {
        ...state, isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      }


    default:
      return state;
  }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const togleIsFetching = (isFetching) => ({ type: TOGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(togleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);      
        dispatch(togleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
  }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
      dispatch (toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId)
            if (data.resultCode == 0) {
          dispatch (actionCreator(userId));
        }
        dispatch (toggleFollowingProgress(false, userId));
}


export const follow = (userId) => {
  return async (dispatch) => {
    let apiMethod = usersAPI.follow.bind(usersAPI);
    let actionCreator = followSuccess;  
    followUnfollowFlow (dispatch, userId, apiMethod, actionCreator);
  }
}

export const unfollow = (userId) => {
  return async (dispatch) => {
    let apiMethod = usersAPI.unfollow.bind(usersAPI);
    let actionCreator = unfollowSuccess; 
    followUnfollowFlow (dispatch, userId, apiMethod, actionCreator); 
  }
}


export default usersReducer;