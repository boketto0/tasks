import './App.css';
import Home from './Home';
import Task1 from './Task1' 
import Task2 from './Task2';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Card from './Card';
import FlexBox from './FlexBox';
import ParentBlock from './ParentBlock';

  function App() {
  
    return (
      <div className='app'>
        <Router>
          <ul>
            <li>
            <a href="/">Home</a>
            </li>
            <li>
              <a href="/task1">Task1</a>
            </li>
            <li>
              <a href="/task2">Task2</a>
            </li>
            <li>
              <a href="/cards">Card</a>
            </li>
            <li>
              <a href="/flexBox">FlexBox</a>
            </li>
            <li>
              <a href="/cardTest">Testing cards</a>
            </li>
          </ul>
            <Switch>
              <Route exact path="/task1" component={Task1}/>
              <Route exact path="/task2" component={Task2}/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/cards" component={Card}/>
              <Route exact path="/flexBox" component={FlexBox}/>
              <Route exact path="/cardTest" component={ParentBlock}/>
            </Switch>
        </Router>
      </div>
    );
}

export default App;
