import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    setInterval(() => tick(), 1000);
  });

  return (
    <div className="App">
      <h1>Realtime CLOCK</h1>
      <hr />
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
