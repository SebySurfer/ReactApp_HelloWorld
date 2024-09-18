import Message from "./Message";
import ListGroup from "./assets/components/ListGroup";

function App(){
  let items = ['Tokyo', 'Bangladesh', 'Iceland'];

  return <div>
    <Message/>
    <ListGroup items={items} heading="Cities"/>
    </div>

}
export default App;