import './Task2.css'
import {useState} from "react";

export default function Task2() {

    const [ ,setFocus] = useState(false);
    const [inputColor, setInputColor] = useState(false);
    const [inputValue, setInputValue] = useState("");

    function handleIsFocused() {
        setFocus(true);
        setInputColor(true);
    }

    function handleIsBlur() {
        setFocus(false);
        setInputColor(false);
        if (!inputValue) {
            handleAlert();
          } else {
            console.log(inputValue);
        }
    }

    function handleAlert() {
        alert("Вы не заполнили поле!");
    }

    function handleInputChange(e) {
        setInputValue(e.target.value);
      }

    return(
        <div className="block2">
            <div className='btn2' id='btn'>
                <input className={`input ${inputColor ? "input-border__color" : ""}`} type={"text"} name="key" placeholder="Заполнить поле" 
                onFocus={handleIsFocused}
                onBlur={handleIsBlur}
                onChange={handleInputChange}
                value={inputValue}/>
            </div>
        </div>
    )
}
