import Message from "./Message";
import ListGroup from "./assets/components/ListGroup";
import Alert from "./assets/components/Alert";

function App(){
  let items = ['Tokyo', 'Bangladesh', 'Iceland'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return <div>
    <Message/>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    <Alert>Hello World, again</Alert>
    </div>

}
export default App;