import React from 'react'

const Heading = ({text , textColor}) => {
       let headingClasses = `font-bold text-3xl sm:text-4xl md:text-5xl text-${textColor} `
  return (
    <h3 className={headingClasses}>
      {text}
    </h3>
  )
}

export default Heading
