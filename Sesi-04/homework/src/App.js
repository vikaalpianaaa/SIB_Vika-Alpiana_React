import Header from './components/header'
import About from './components/about';
import Meetup from './components/meetup';
import NextMeetup from './components/next';
import Members from './components/members';
import Pastmeetups from './components/pastmeetups';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header/>
      <Meetup/>
      <h3 className="inline-left">Next Meetup</h3>
      <NextMeetup/>
      <h3 className="inline-left">About Meetup</h3>
      <About/>
      <div className="container-inline">
        <h3 className="inline-left">Members</h3>
        <h3 className="inline-right">See All</h3>
      </div>
      <Members/>
      <div className="container-inline">
        <h3 className="inline-left">Past Meetups</h3>
        <h3 className="inline-right">See All</h3>
      </div>
      <Pastmeetups/>
      <Footer/>
    </>
  );
}

export default App;

