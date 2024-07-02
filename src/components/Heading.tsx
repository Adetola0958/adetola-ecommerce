import React from 'react'

interface HeadingProps{
    heading: string
    className?: string
}

const Heading = ({heading, className}: HeadingProps) => {
  return (
    <h3 className={`text-3xl font-semibold pb-6 ${className}`}>{heading}</h3>
  )
}

export default Heading