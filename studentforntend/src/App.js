
import './App.css';
import {Provider} from 'react-redux';
import Heading from './Componet/Heading';
import StudentDetails from './Componet/StudendDetails';
import StudentForm from './Componet/StudentForm';
import { configureStore } from "./Store/configureStore";
const store = configureStore();
 
function App() {
  return (
    <div className="App">
         <Provider store={store}>
      <Heading />
      <StudentForm />
      <StudentDetails />
      </Provider>
    </div>
  );
}

export default App;
