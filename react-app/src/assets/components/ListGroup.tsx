import { Fragment } from "react";  


function ListGroup(){
  const items = ['Tokyo', 'Bangladesh', 'Iceland'];




  /*You can only return one element at a time, that is why if
   you have multiple elements, you have to encase it all into one 
   single element. However, this also creates unecessary creation of newer elements 
   that will be added to our code, which isnt effective. 

   To be more productive, we can import "Fragments" from the library of react to encase 
   all of our code wthout of needing to make newer types of elements to return the whole b lock of code 
  
  */

   /* A JS expresion is not allowed in the middle of a jsx markup, 
      in jsx, we can only use html elements or other react components. That is why we bring 
      the following code within braces {}
      */
  
  return (
    //This is what a fragment looks like: " <> ... </> ""

    <> 
       <h1>List</h1>
    <ul className="list-group">
        
      {items.map(item => <li key = {item}>{item}</li>)}
    </ul>

    </>
     
    );

    
}

export default ListGroup;