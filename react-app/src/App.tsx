import Message from "./Message";
import ListGroup from "./assets/components/ListGroup";
import Alert from "./assets/components/Alert";
import Button from "./assets/components/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


function App(){
  let items = ['Tokyo', 'Bangladesh', 'Iceland'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const [alertVis, setAlertVis] = useState(false);

  return <div>
    <Message/>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    { alertVis && <Alert onClose={() => setAlertVis(false)}>Hello World, again</Alert>}
     <Button color= "btn btn-primary" onClick={() => setAlertVis(true)}>Hello there </Button>
    </div>

}
export default App;