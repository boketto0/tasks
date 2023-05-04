import './Task3.css'

export default function Task3() {

    function handleKeyDown(e) {
        if (e.keyCode === 13) { // Enter
          window.alert("Enter key pressed");
        } else if (e.keyCode === 27) { // Esc
          window.alert("Esc key pressed");
        }
      }
      
      return (
        <div className='block3'>
            <input type="text" onKeyDown={handleKeyDown} />
        </div>
      )
}





// Задача_3
// ПРи нажатии enter и esc, 
// показывать браузерное уведомление, 
// что нажата определенная кнопка на 
// клавиатуре