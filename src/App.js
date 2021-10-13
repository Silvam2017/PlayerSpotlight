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
        {/* Navbar with Home button and button for QB Rankings page */}
        <Navibar/>
          {/* background image with string styling */}
        <div className='bg-image' style={{backgroundImage: 'url('+Background+')', backgroundSize: "cover", height: "60vh", color:'#f5f5f5'}}>
          {/* Static biographical info in jumbotron */}
          <Jumbotron className='jumbotron'>
            <div id='container'>
              <h1 className='display-3'>D'Andre Swift - #32</h1>
              <hr className="my-2"/>
              <p className='display-6'>Position - Running Back</p>
              <p className='display-6'>College - Georgia</p>
              <p className='display-6'>Drafted - 2020, Round 2, Pick 3</p>
            </div>
          </Jumbotron>
        </div>
        <h1>2020 Statistics</h1>
        {/* Dynamic Card List prints each stat */}
        <CardList Stats={Stats} className='cardContainer'></CardList>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
