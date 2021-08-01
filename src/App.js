import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={SearchPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
