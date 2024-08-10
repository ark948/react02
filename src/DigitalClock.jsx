import {useState, useEffect} from 'react';

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    // perform side code during each render or mount or value update
    useEffect(() => {
        const intervalId = setInterval(() => {
            // every 1 second update the state of time
            setTime(new Date());
        }, 1000);

        return () => { // cleanup
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        // gives hour in 12 hour format
        // e.g. if hour is 13 then 13 divided by 12 is 1
        // if hour is 12, do not return 0, instead return 12
        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${meridiem}`;
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className='clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;