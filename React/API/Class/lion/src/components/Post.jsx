import React from 'react'

const Post = props => {
  const { pic } = props
  const { author, quote } = props.quote


  return (
    <div className='container'>
      <div className='poster'>
        <img src={pic} alt="Lion" />
        <p className='quote'>{quote}</p>
        <hr />
        <p className='author'> - ${author}</p>
      </div>
    </div>
  )
}

export default Post