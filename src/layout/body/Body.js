import React from 'react'

const Body = (props) => {
  return (
    <section className="body">
      <div className="container">
        {props.children}
      </div>
    </section>
  )
}

export default Body;