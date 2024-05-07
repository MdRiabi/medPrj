
import './App.css'
import Alert from './components/Alert'
import ListGroup from './components/ListGroup'

function App() {
  
  //let item = ["tounes", "benArous", "benzaret", "nebel", "sousa", "sfax", "hamemmat"];

  /* const handleSelectItem = (item: string) =>{
    console.log(item);
  } */
  return (
    <div>
{/*       <ListGroup  items= {item} heading="cities" onSelectItem = {handleSelectItem}/>

 */}  
 
 <Alert>
  hello <span>World</span>
 </Alert>
   </div>
  )
}

export default App
