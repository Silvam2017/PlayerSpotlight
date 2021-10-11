import './App.css';
import { Jumbotron, Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar color="light" light expand='md'>
          <ul>
            <li>
              <a href='home'>
                Home
              </a>
            </li>
            <li>
              <a href='contact'>
                Contact
              </a>
            </li>
          </ul>
        </Navbar>
        <div>
          <Jumbotron background-image='../assets/img/swift1.jpg'>
            <h1>
              D'Andre Swift
            </h1>
            <hr className="my-2"/>
            <p>Running Back</p>
            <p>Georgia</p>
          </Jumbotron>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
