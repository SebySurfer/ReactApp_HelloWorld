import { Fragment, MouseEvent } from "react";  


interface Propert {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Propert){

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
  

      const getMessage = () =>{
        return items.length === 0 ? <p>No item found</p> : null;
      }

      //Event handler 
      const handleClick = (event: MouseEvent) => console.log(event);
  return (
    //This is what a fragment looks like: " <> ... </> ""

    // "{}" Can render anything dynamically (like JS) in the return statement

    <> 
       <h1>{heading}</h1>

       {getMessage()}

    <ul className="list-group">
        
      {items.map( (item, index) => ( <li className = "list-group-item" key = {item} onClick={ () => {handleClick; onSelectItem(item);}}>{item}</li>))}
    </ul>

    </>
     
    );

    
}

export default ListGroup;