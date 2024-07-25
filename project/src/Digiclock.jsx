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
    const formatDate=(date)=>{
        const options={weekday: "long",  year:"numeric", month: "long", day: "numeric",}
       return date.toLocaleDateString(undefined,options)
    }

    const ampm = () => {
     return currentTime.getHours() >= 12 ? " PM" : " AM"
    }

    return (
      <>
          <div className="digital-clock">
              <h1>Digital Clock</h1>
              <div className="time">
                  {startWithZero(formetHours(currentTime.getHours()))}:
                  {startWithZero(currentTime.getMinutes())}:
                  {startWithZero(currentTime.getSeconds())} 
                  {ampm()}
              
              </div>
              <div className="date">{formatDate(currentTime)}</div>
          </div>
          
      </>
  )
}
