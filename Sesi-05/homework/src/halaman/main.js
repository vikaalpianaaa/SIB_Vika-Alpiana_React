import Button from 'react-bootstrap/Button';
import React, {useState} from 'react'

function Main(props){
    const [join, setjoin] = useState("")
    
    return (
    <div className="meetup-now">
        <div className="image">
          <img src={require("../hacktiv8/hacktiv8.jpg")} />
        </div>
      
      <div className="text-meetup-now">
        <h3 >Hacktiv8 Meetup</h3>
          <p className ="desc">Location   : Jakarta</p>
          <p className ="desc">Members    : 1,078</p>
          <p className ="desc">Organizers : Andy Wiranata</p>
        <br/>

        <Button variant="success" size="lg" onClick={() => setjoin(alert("Sudah Join"))}>
          Join Us
        </Button>
      </div> 
    </div>
    )
}

export default Main;