import React from 'react'
import './possibility.css'
import possiImage from '../../assets/Feature Image.png'

const Possibility = () => {
  return (
    <div className="gpt3__possi section__padding" id='possibility'>
      <div className="gpt3__possi-image">
        <img src={possiImage} alt="image of vr" />
      </div>
      <div className="gpt3__possi-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility