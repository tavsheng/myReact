import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
    return (
        <div className={s.item}>


            <div>
                <img src='https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg'/>
                {props.message}
            </div>
            <div>
                <span>{props.likes} likes</span>
            </div>
        </div>
    );
}

export default Post;