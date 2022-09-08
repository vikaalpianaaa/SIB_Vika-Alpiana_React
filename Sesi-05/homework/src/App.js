import Header from './components/header'
import Aboutmeetup from './components/about';
import Mainmeetup from './components/main';
import NextMeetup from './components/next';
import Members from './components/members';
import Pastmeetups from './components/pastmeetups';
import Footer from './components/footer';
import React from 'react'

function App() {

  const navTitle = "Qtemu"
  const navText = "Create Meetup"
  const navText2 = "Explore"
  const navLogin = "Login"

  const clicked = () =>{
    return alert("Btn clicked")
  }


  const footerText = 'Copyright Hacktiv8 2018'


  return (
    <>
    <div className="container">
      <div className="header"><Header clicked={clicked} navTitle={navTitle} navText={navText} navText2={navText2} navLogin={navLogin} /></div>
      
    {/* Mengirimkan props Start*/}
      <Mainmeetup clicked={clicked}/>
    {/* Mengirimkan props END */}
      <h3 className="inline-left">Next Meetup</h3>
    
      <NextMeetup/>
      <h3 className="inline-left">About Meetup</h3>
      <Aboutmeetup/>
      <div className="container-inline">
        <h3 className="inline-left">Members</h3>
        <h3 className="inline-right">See All</h3>
      </div>
      <Members/>
  
      <div className="container-inline">
        <h3 className="inline-left">Past Meetups</h3>
        <h3 className="inline-right">See All</h3>
      </div>
      <Pastmeetups />
      <Footer footerText={footerText}/>
    </div>
    </>
  );
}

export default App;

