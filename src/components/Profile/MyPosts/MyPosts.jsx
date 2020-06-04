import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);


const MyPosts = React.memo (props => {


    let postsElement = props.profilePage.posts
        .map(p => <Post message={p.message} likes={p.likes} />);

    let addNewPost = (values) => {
        props.addPost(values.newPostElement)

    }
    

    return (
        <div className={s.posts}>

            <h4>My Posts</h4>
            <AddPostFormRedux onSubmit = {addNewPost}/>

            {postsElement}

        </div>
    );
});
const AddPostForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <Field component = {Textarea}
             name= 'newPostElement' 
            validate = {[required, maxLength10 ]} 
/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form:'profileAddPostForm'}) (AddPostForm);
export default MyPosts;