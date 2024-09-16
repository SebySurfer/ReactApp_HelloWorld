
//PascalCasing = onlig for React, optional convention for devs to follow, Capitalizing the first letter 

//Message = child component of App (parent)
function Message(){

    const name = '';

    if(name){
        //JSX: JavaScript XML
        return <h1>Hello {name}</h1>
    } else {
        return <h1>Hello World</h1>
    }
   
}

export default Message;

