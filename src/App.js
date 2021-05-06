import './App.css';
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from './components/header/header'
import Body from './components/body/body'
import Mentors from './components/mentors/mentors'
import MentorForm from './components/mentorform/mentorform'
import Tutorial from './components/tutorial/tutorial'
import Description from './components/desc/desc'
import Infobar from './components/infobar/infobar'
import Schools from './components/schools/schools'
import ContactForm from './components/contact/contact'
import Faq from './components/faq/Faq'
import Footer from './components/footer/footer'


function App() {
  return (
    <div className="App">
        <Helmet>
          <title>{ "PeerOne" }</title>
        </Helmet>
        <Header></Header>
        <Body></Body>
        <Mentors></Mentors>
        <MentorForm></MentorForm>
        <Tutorial></Tutorial>
        <Description></Description>
        <Infobar></Infobar>
        <Schools></Schools>
        <Faq></Faq>
        <ContactForm></ContactForm>
        <Footer></Footer>
    </div>
  );
}

export default withRouter(App);
