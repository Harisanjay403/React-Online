import { useState, useEffect } from 'react' ;
export default function App() {
    const [currentTime,setCurrentTime]=useState(new Date)
  return (
      <>
          <div className="digital-clock">
              <h1>Digital Clock</h1>
              <div className="time">07:30:51 pm</div>
              <div className="date">Thursday, February 6, 2024</div>
          </div>
          
      </>
  )
}



body {
width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#2c3a47;
}

.digital-clock{
    width:400px;
    background-color:#fff;
    padding:20px;
    text-align:center;
    border-radius:4px;
    box-shadow:0 0 10px rgba(0, 0, 0, 0.1)
}
h1{
    color:orangered;
    font-weight:600px;
    font-size:40px;
    margin-bottom:15px;
}
.time{
    margin-bottom:15px;
    font-size:50px;
    font-weight:700;
}
.date{
    color:#888;
    font-size:20px;
}
