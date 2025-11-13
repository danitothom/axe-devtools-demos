import React from 'react'
import PropTypes from 'prop-types'
import './LandingPage.css'

const LandingPage = ({ heading, additionalHeaderContent, children }) => {
  return (
    <div className="LandingPage">
      <div className="LandingPage__head">
        <h1 id="main-heading">{heading}</h1>
        {additionalHeaderContent}
      </div>
      {children}
    </div>
  )
}

LandingPage.propTypes = {
  heading: PropTypes.node,
  additionalHeaderContent: PropTypes.node,
  children: PropTypes.node,
}

export default LandingPage
