import { HourFormDisplay } from "./styles/HourFormDisplay";
import { useState, useEffect, useContext  } from "react"

export default function HourFormOp() {
  const [startWork, setStartWork] = useState({hour:'',minute:'', ok: false});
  const [endWork, setEndWork] = useState({hour:'',minute:'', ok: false});
  const [startLunch, setStartLunch] = useState({hour:'',minute:'', ok: false});
  const [endLunch, setEndLunch] = useState({hour:'',minute:'', ok: false});
  const [date, setDate] = useState('');
  const [workedTime, setWorkedTime] = useState(0);
  const requiredTime = 480;
  const [remainingTime, setRemainingTime] = useState(requiredTime);
  const statesArray = [{currState: startWork, setCurrState: setStartWork, message: 'Started work at:'}, 
    {currState: startLunch, setCurrState:  setStartLunch, message: 'Started lunch at:'}, 
    {currState: endLunch, setCurrState: setEndLunch, message: 'Finished lunch at:'},
    {currState: endWork, setCurrState: setEndWork, message: 'Finished work at:'}, ];
  const checkTime = () => {
    const currentTime = new Date();
    if (!date) setDate(`${currentTime.getMonth() + 1}/${currentTime.getDate()}/${currentTime.getFullYear()}`)
  };
  const getWorkedTime = () => {
    const startWorkMinutes = parseInt(startWork.minute) + (60 * parseInt(startWork.hour));
    const endWorkMinutes = parseInt(endWork.minute) + (60 * parseInt(endWork.hour));
    const startLunchMinutes = parseInt(startLunch.minute) + (60 * parseInt(startLunch.hour));
    const endLunchMinutes = parseInt(endLunch.minute) + (60 * parseInt(endLunch.hour));
    const totalMinutes = (endWorkMinutes - startWorkMinutes) - (endLunchMinutes - startLunchMinutes);
    checkTime();
    setWorkedTime(totalMinutes);
    setRemainingTime(requiredTime - totalMinutes);
  }
  return (
    <HourFormDisplay>
      <section>
        <div>
          <button disabled={date} type="button" onClick={checkTime}>{`Date: ${date}`}</button>
        </div>
        {statesArray.map(({currState, setCurrState, message}) => {
          return (
            <div className="input-field">
            <label>
              {`${message}`}
              <input 
                placeholder="hour e.g. 08 or 20" 
                type="text"
                value={currState.hour}
                disabled={currState.ok}
                onChange={({target}) => setCurrState({...currState, hour: target.value})}
              />
              :
              <input 
                placeholder="minute e.g. 03" 
                type="text"
                value={currState.minute}
                disabled={currState.ok}
                onChange={({target}) => setCurrState({...currState, minute: target.value})}
              />
            </label>
            <button disabled={currState.ok} onClick={() => setCurrState({...currState, ok: true})}type="button">
            Ok
            </button>
          </div>
          )
        })}
        <div>
          <h3>Get worked time: <button type="button" onClick={getWorkedTime}>Ok</button></h3>
        </div>
      </section>
      <div className="result">
        {startWork.ok? <h3>{`Started work at: ${startWork.hour}:${startWork.minute}`}</h3>: null}
        {startLunch.ok? <h3>{`Started lunch at: ${startLunch.hour}:${startLunch.minute}`}</h3>: null}
        {endLunch.ok? <h3>{`Finished lunch at: ${endLunch.hour}:${endLunch.minute}`}</h3>: null}
        {endWork.ok? <h3>{`Finished work at: ${endWork.hour}:${endWork.minute}`}</h3>: null}
        {workedTime? <h3>{`On ${date} you worked a total of: ${Math.floor(workedTime/60)} hour(s) and ${workedTime%60} minute(s)`}</h3> : null}
        {workedTime && remainingTime > 0
        ? <h3>{`Remaining ${Math.floor(remainingTime/60)} hour(s) and ${remainingTime % 60} minute(s) of work`}</h3>
        :null}
        {workedTime && remainingTime < 0
        ? <h3>{`Exceeding ${Math.abs(Math.floor(remainingTime/60))} hour(s) and ${Math.abs(remainingTime % 60)} minute(s) of work`}</h3>
        :null}
      </div>
      <button type="button"  disabled={!workedTime}>
        Finish the day!!
      </button>
    </HourFormDisplay>
  )
};