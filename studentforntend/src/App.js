
import './App.css';
import {Provider} from 'react-redux';
import AppRouter from './Componet/AppRouter';
import { configureStore } from "./Store/configureStore";

const store = configureStore();


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
