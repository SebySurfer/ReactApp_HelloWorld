import Message from "./Message";
import ListGroup from "./assets/components/ListGroup";

function App(){
  let items = ['Tokyo', 'Bangladesh', 'Iceland'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return <div>
    <Message/>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>

}
export default App;