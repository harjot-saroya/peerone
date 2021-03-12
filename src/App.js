import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Body from './components/body/body'
import Mentors from './components/mentors/mentors'

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Body></Body>
        <Mentors></Mentors>
    </div>
  );
}

export default App;
