import AddTodo from './components/AddTodo';
import TodoSelector from './selector/TodoSelector';
import { Provider } from 'react-redux';
import {store} from './redux/store';

function App() {

  return (
    
    <Provider store={store}>
      <section className="min-vh-100 overflow-auto" style={{backgroundColor : '#e2d5de'}}>
        <div className="container py-5 h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius : '15px'}}>
                <div className="card-body p-5">
                  <AddTodo />
                  <TodoSelector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Provider>
  );
}

export default App;
