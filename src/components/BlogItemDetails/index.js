import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogsData: updatedData, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blogsData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogsData

    return (
      <div className="blog-data-container">
        <h1 className="data-title">{title}</h1>
        <div className="blog-data-author-container">
          <img src={avatarUrl} alt={author} className="author" />
          <p className="blog-data-author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-data-image" />
        <p className="data-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
