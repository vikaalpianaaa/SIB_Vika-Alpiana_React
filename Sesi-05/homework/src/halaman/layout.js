import React from 'react'
import MainMeetup from "./main"
import Aboutmeetup from "./about"
import NextMeetup from "./next"
import Members from "./members"
import Pastmeetups from "./pastmeetups"


function Layout() {

  const clicked = () => {
    return alert("Btn clicked")
  }

    return (
      <div>
      {/* Mengirimkan props Start*/}
      
      <MainMeetup clicked={clicked}/>
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
      </div>
    )
}

export default Layout