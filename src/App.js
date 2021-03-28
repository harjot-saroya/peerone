import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Body from './components/body/body'
import Mentors from './components/mentors/mentors'
import MentorForm from './components/mentorform/mentorform'
import Tutorial from './components/tutorial/tutorial'
import Description from './components/desc/desc'
import Infobar from './components/infobar/infobar'
import Schools from './components/schools/schools'

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Body></Body>
        <Mentors></Mentors>
        <MentorForm></MentorForm>
        <Tutorial></Tutorial>
        <Description></Description>
        <Infobar></Infobar>
        <Schools></Schools>
    </div>
  );
}

export default App;
