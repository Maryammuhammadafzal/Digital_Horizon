import React from 'react'

const Subheading = ({text , textColor}) => {
        let subHeadingClasses = `md:text-2xl sm:text-xl text-lg font-medium text-${textColor} mb-0 `
  return (
    <h5 className={subHeadingClasses}>{text}</h5>
  )
}

export default Subheading
