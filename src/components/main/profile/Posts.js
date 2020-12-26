import React from 'react'
// import s from './dialogs.module.css'
import Post from './post/Post'
import {Field, reduxForm} from "redux-form";

const Posts = React.memo(({addPost, posts}) => {
  let onPostCreate = (formData) => {
    addPost(formData.post)
  }

  return (
    <div>
      <h2>Create post</h2>
      <CreatePostForm onSubmit={onPostCreate} />
      <h2>My posts</h2>
      {posts.map(post => <Post key={post.id} title={post.title}/>)}
    </div>
  )
});

let CreatePostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field type='text' placeholder='Title post' component={'input'} name='post'/>
      <br/>
      <button>Create post</button>
    </form>)
}

CreatePostForm = reduxForm({form: 'CreatePost'})(CreatePostForm)

export default Posts
