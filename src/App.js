import './App.css';
import { Helmet } from 'react-helmet'
import favicon from './assets/shoe.ico'
import {seperator} from './assets/index'
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
        <Helmet
        links={[{
          rel:"icon",
          type:"image/png",
          sizes:"16x16",
          href:"./assets/shoe.ico"}]}
        >
          <title>{ "PeerOne" }</title>
        <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./assets/shoe.ico"
      />
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

export default App;
