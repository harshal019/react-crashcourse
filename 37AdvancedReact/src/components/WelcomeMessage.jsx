import React from 'react'

const WelcomeMessage = ({onPostsClick}) => {
  return (
    <center >
         <h1 className='welcome-message'>There are no Posts</h1>
         <button 
            type="button" 
            class="btn btn-primary"
            onClick={onPostsClick}>
            Get Posts From Server
        </button>
    </center>
   
  )
}

export default WelcomeMessage;