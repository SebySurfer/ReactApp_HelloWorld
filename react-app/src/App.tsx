import Message from "./Message";
import ListGroup from "./assets/components/ListGroup";
import Alert from "./assets/components/Alert";
import Button from "./assets/components/Button";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  let items = ['Tokyo', 'Bangladesh', 'Iceland'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return <div>
    <Message/>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    <Alert>Hello World, again</Alert>
     <Button color= "btn btn-primary" onClick={() => console.log("U got the ebola")}>Hello there </Button>
    </div>

}
export default App;