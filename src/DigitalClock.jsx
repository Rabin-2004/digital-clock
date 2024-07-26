import React, {useState, useEffect} from "react"

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date)
      }, 1000);

      return () => {
        clearInterval(intervalId);
      }
    },[])

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = hours >= 12? "PM" : "AM";
        
        hours = hours % 12 || 12 ;

        return `${leadZero(hours)}:${leadZero(minutes)}:${leadZero(seconds)} ${ampm}`;
    }

    function leadZero(number) {
        if (number < 10) {
            return "0" + number;
        }
        return number.toString();
    }
    

    return(<div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
    </div>)
}
export default DigitalClock