import { Fragment } from "react";  


function ListGroup(){

  /*You can only return one element at a time, that is why if
   you have multiple elements, you have to encase it all into one 
   single element. However, this also creates unecessary creation of newer elements 
   that will be added to our code, which isnt effective. 

   To be more productive, we can import "Fragments" from the library of react to encase 
   all of our code wthout of needing to make newer types of elements to return the whole b lock of code 
  
  */
  
  return (
    //This is what a fragment looks like: " <> ... </> ""

    <> 
       <h1>List</h1>
    <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>

    </>
     
    );

    
}

export default ListGroup;