import React from 'react'

const Body = (props) => {

  let content = props.children;

  if (props.inContainer) {
    content = (
      <div className="container">
        {props.children}
      </div>
    );
  }
  return (
    <section className="body">
      {content}
    </section>
  )
}

export default Body;