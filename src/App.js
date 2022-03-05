import AddTodo from './components/AddTodo';
import ShowTodo from './components/ShowTodo';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <AddTodo />
        <ShowTodo />
      </div>
    </Provider>
  );
}

export default App;
