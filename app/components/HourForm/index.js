import { HourFormDisplay } from "./styles/HourFormDisplay";
import { useState, useEffect, useContext  } from "react"

export default function HourForm() {
  const [ hourInfo , setHourInfo ] = useState({
    startHour: '',
    endHour: '',
    endLunch: '',
    startLunch: '',
    date: '',
    remainingHours: ''
  });
  const {startHour, endHour, endLunch, startLunch, remainingHours, date} = hourInfo; 
  const checkTime = (name) => {
    const currentTime = new Date();
    if (!date) {
      setHourInfo({...hourInfo, 
        [`${name}`]: `${currentTime.getHours()}:${currentTime.getMinutes()}`,
        date: `${currentTime.getMonth() + 1}/${currentTime.getDate()}/${currentTime.getFullYear()}`
      });
    } else {
      setHourInfo({...hourInfo, [`${name}`]: `${currentTime.getHours()}:${currentTime.getMinutes()}`})
    }
  };
  return (
    <HourFormDisplay>
      <section className="form">
        <div className="field">
          <h2>Started work at:</h2>
          <button name="startHour" disabled={startHour} onClick={({target}) => checkTime(target.name)}>Ok</button>
          <h2>{`${startHour}`}</h2>
        </div>
        <div className="field">
          <h2>Finished work at:</h2>
          <button name="endHour" disabled={endHour} onClick={({target}) => checkTime(target.name)}>Ok</button>
          <h2>{`${endHour}`}</h2>
        </div>
        <div className="field">
          <h2>Started lunch at:</h2>
          <button name="startLunch" disabled={startLunch} onClick={({target}) => checkTime(target.name)}>Ok</button>
          <h2>{`${startLunch}`}</h2>
        </div>
        <div className="field">
          <h2>Finished lunch at:</h2>
          <button name="endLunch" disabled={endLunch} onClick={({target}) => checkTime(target.name)}>Ok</button>
          <h2>{`${endLunch}`}</h2>
        </div>
        <h2>{`Date: ${date}`}</h2>
      </section>
    </HourFormDisplay>
  )
};