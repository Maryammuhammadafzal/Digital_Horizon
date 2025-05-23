import React from 'react'

const Subheading = ({text}) => {
        let subHeadingClasses = `text-2xl font-medium text-[#007BFF] mb-0`
  return (
    <h5 className={subHeadingClasses}>{text}</h5>
  )
}

export default Subheading
