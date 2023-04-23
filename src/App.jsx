import './App.css';
import Routes from './routes'
import store from "./store";
import { Provider } from "react-redux";
import Loading from './components/loading'
import { useSelector } from 'react-redux';

//登录时路由刷新
const RenderRouter = () => {
  const state = useSelector(state => state.app)
  return <Routes login={state?.login} />
}

function App() {
  return (
    <div className="App">
      <Provider Provider store={store} >
        <RenderRouter></RenderRouter>
        <Loading></Loading>
      </Provider>
    </div>
  );
}

export default App;
