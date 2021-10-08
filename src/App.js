import './App.css';
import UsersClass from "./components/UsersClass";
import UsersFunction from './components/UsersFunction';

function App() {
  return (<>
    <h1>Fetching apis with a classComponent</h1>
    <UsersClass />
    <hr />
     <h1>Fetching apis with a FunctionalComponent</h1>
     <UsersFunction />
    </>
  );
}

export default App;
