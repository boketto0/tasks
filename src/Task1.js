import './Task1.css'
import {useState} from "react";

export default function Task1() {
    const [time, setTime] = useState(0);
    const [records, setRecords] = useState([]);
  
    let timerId;
  
    function handleMouseDown() {
      console.log("MouseDown");
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  
    function handleMouseUp() {
      console.log("MouseUp");
      clearInterval(timerId);
      setRecords((prevRecords) => [...prevRecords, time]);
      setTime(0);
    }
  
    return (
      <div className="block1">
        <div className="btn1" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          {!time ? "Кнопка" : `Загрузка ${time} сек`}
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Время загрузки</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{record} сек</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } 
