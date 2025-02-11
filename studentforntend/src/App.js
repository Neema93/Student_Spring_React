
import './App.css';
import {Provider} from 'react-redux';
import AppRouter from './Componet/AppRouter';
import { configureStore } from "./Store/configureStore";
import Heading from './Componet/Heading';
const store = configureStore();
const state = store.getState();
console.log("response",state)
function App() {
  return (
    <div className="App">
      
         <Provider store={store}>
     
      <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
