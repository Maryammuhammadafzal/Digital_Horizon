import React from 'react'

const Heading = ({text , textColor}) => {
       let headingClasses = `font-bold text-4xl sm:text-5xl md:text-6xl text-${textColor} `
  return (
    <h3 className={headingClasses}>
      {text}
    </h3>
  )
}

export default Heading
