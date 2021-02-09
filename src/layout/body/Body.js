import React from 'react'

const Body = (props) => {
  return (
    <div className="body">
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}

export default Body;