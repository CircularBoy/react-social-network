import React from 'react'
import s from './post.module.css'

function Post({title}) {
  return (
    <div className={s.post}>
      <h1>{title}</h1>
    </div>
  )
}

export default Post