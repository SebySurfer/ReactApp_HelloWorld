//rafce
import React from 'react'

interface Props {
    /*
    children class: built into the library, which enables you to adjust the name of the button for each new 
    "child" button

    onClick: open funcion that later you can set on the action it is going to take when clicked 
    for each individual button
    */

    children: string;
    onClick: () => void;
    color: string;

}

/*

For the parameters in button, we have to "destructure" the interface Props and get the variables inside it using {}: CLASS/INTERFACE_NAME
This is like using the "this" keyword, but it grabs the variables of only a local class/interface
 */
const Button = ({children, onClick, color}: Props) => {


  return (
    <button className= {color} onClick= {onClick}>{children}</button>

  )
}

export default Button;

