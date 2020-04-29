import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profileReducer'




const MyPosts = (props) => {


let newPostElement = React.createRef();

let postsElement = props.profilePage.posts
.map (p => <Post message={p.message} likes= {p.likes}/> );

let addPost = () => {
    let text= newPostElement.current.value;
    props.addPost();
  
}
let onPostChange =() => {
    let text= newPostElement.current.value;
    props.updateNewPost(text);
}


    return (
        <div className= {s.posts}>
            
            <h4>My Posts</h4>
            <div>
            <textarea ref= {newPostElement}
            onChange= {onPostChange}
            value= {props.profilePage.newPostText}/>
            </div>
            <div>
                <button onClick= {addPost}>Add post</button>
            </div>
        {postsElement}
           
        </div>
    );
}



export default MyPosts;