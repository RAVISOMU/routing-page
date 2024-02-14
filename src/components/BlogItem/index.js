import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, imageUrl, title, avatarUrl, author, topic} = eachBlog

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-link">
        <div className="blog-item-container">
          <img src={imageUrl} alt="item" className="blog-image" />
          <div className="blog-content">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="author-content-container">
              <img src={avatarUrl} alt="avatar" className="avatar-image" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
