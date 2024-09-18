import React from 'react'


interface Props {
    //children is built-in within react, where it enables you to
    //write long strings within <> string </>
    children: string;
}

const Alert = ({children}: Props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert