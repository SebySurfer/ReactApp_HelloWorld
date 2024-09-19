import React from 'react'


interface Props {
    //children is built-in within react, where it enables you to
    //write long strings within <> string </>
    children: string;
    onClose: () => void;
}

const Alert = ({children, onClose}: Props) => {
  return (
      <div className="alert alert-primary  alert-dismissible fade show">{children}
      <button onClick = {onClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

      </div>

    

  )
}

export default Alert