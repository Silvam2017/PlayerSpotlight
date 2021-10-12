import './App.css';
import  Navibar  from './Components/Navbar.js';
import { Jumbotron } from 'reactstrap';
import Background from './assets/images/swift1.jpg'
import CardList from './Components/CardList'
import Stats from './Components/Stats';

function App() {
  return (
    <div className="App">
      <div>
        <Navibar color>
          <ul>
            <li>
              <a href='home'>
                Player Spotlight
              </a>
            </li>
            <li>
              <a href='contact'>
                Spotlight History
              </a>
            </li>
            <li>
              <a href='vote'>
                Spotlight Vote
              </a>
            </li>
          </ul>
        </Navibar>
        <div>
          <Jumbotron className='jumbotron'>
            <div id='container'>
              <h1 className='display-4'>D'Andre Swift - #32</h1>
              <hr className="my-2"/>
              <p className='lead'>Running Back</p>
              <p className='lead'>Georgia</p>
              <p className='lead'>Drafted: 2020, Round 2, Pick 3</p>
            </div>
          </Jumbotron>
        </div>
        <CardList Stats={Stats}></CardList>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
