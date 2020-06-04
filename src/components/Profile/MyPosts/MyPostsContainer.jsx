import React from 'react';
import { addPostActionCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';





let mapStateToProps =(state) =>{
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        
        addPost: (newPostElement) => {
            dispatch(addPostActionCreator(newPostElement))
        }
    }
} 
const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;