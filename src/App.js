import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
