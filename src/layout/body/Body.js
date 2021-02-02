import React, { useState } from 'react'

const Body = (props) => {
  return (
    <div className="body">
      {/* 
      <section className="main-image">
        <img alt="main" src="/images/neon-wallpaper-cyberpunk-city-wallpaper-4k.jpg"/>
      </section> */}
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}

export default Body;