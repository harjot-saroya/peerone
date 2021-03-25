import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Body from './components/body/body'
import Mentors from './components/mentors/mentors'
import MentorForm from './components/mentorform/mentorform'
import Tutorial from './components/tutorial/tutorial'


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Body></Body>
        <Mentors></Mentors>
        <MentorForm></MentorForm>
        <Tutorial></Tutorial>
    </div>
  );
}

export default App;
