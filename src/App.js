import logo from './logo.svg';
import './App.css';
// new component 
import Counter from "./Counter.js";



function App() {
  return (
    <>
    Counter defined by {"<Counter init = '10'/>"} : <br/>
    <Counter init ='10' /> <br/>
    Counter defined by {"<Counter init = '5'/>"} : <br/>
    <Counter init = {5} /> <br/> <br/>
    Counter defined by {"<Counter />"} : <br/> <Counter /> <br/> 
            </>
  
  
  );
}

export default App;
