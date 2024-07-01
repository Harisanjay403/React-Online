import { useState, useEffect } from 'react' ;
export default function App() {
    const [currentTime,setCurrentTime]=useState(new Date())
  useEffect(()=>{
      const timer = setInterval(()=>{
          setCurrentTime( new Date())
      },1000)
      return ()=> clearInterval(timer)
  }
)
const formetHours=(hour)=>{
    return hour ===0?12:hour>12? hour-12:hour;
}
const startWithZero =(num)=>{
    return num <10? `0${num}`:num
}
    return (
      <>
          <div className="digital-clock">
              <h1>Digital Clock</h1>
              <div className="time">
                  {startWithZero(formetHours(currentTime.getHours()))}:
                  {currentTime.getMinutes()}:
                  {startWithZero(currentTime.getSeconds())}
              
              </div>
              <div className="date">Thursday, February 6, 2024</div>
          </div>
          
      </>
  )
}
