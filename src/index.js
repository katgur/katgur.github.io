import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'
import store from './app/store.js'
import { Provider } from 'react-redux'
import { App } from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <Router>
        <App />
      </Router>
  </Provider>
);
