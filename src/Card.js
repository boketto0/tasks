import './Card.css'
import CardWrapper from './CardWrapper'
import { Button, ButtonType } from './Button'
import {useState} from "react"

export default function Card(props) {

    const type = ButtonType.PRIMARY;

    const [count, setCount] = useState(0);

    function handleIncrementCount() {
        setCount(count + 1);
    }

    const [toggle, setToggle] = useState(false);
      
    function handleState() {
          setToggle(!toggle);
    }
    
    const [person, setPerson] = useState({
        name: "Julia",
        age: 20,
        occupation: "Programmer"
    });
      
    function handleChangeName() {
        setPerson({ ...person, name: 'Juli'});
    }

    const [list, setList] = useState(["a", "b", "c"]);

    function handleAddItem() {
        setList([...list, "d"]);
    }

    function handleClick() {
        alert("Кнопка нажата!");
    }

  const elements = [
    {
      title: 'Button',
      button: <Button type={type} text={count.toString()} Type={ButtonType.PRIMARY}/>,
      onClick: handleIncrementCount,
    },
    {
      title: 'Alerts',
      button: <Button type={type} text={toggle? "ON" : "OFF"} Type={ButtonType.PRIMARY}/>,
      onClick: handleState
    },
    {
      title: 'Button group',
      button: <Button type={type} text={person.name} Type={ButtonType.PRIMARY}/>,
      onClick: handleChangeName
    },
    {
      title: 'Modal',
      button: <Button type={type} text={list} Type={ButtonType.PRIMARY}/>,
      onClick: handleAddItem
    },
    {
      title: 'Date picker',
      button: <Button type={type} text={'Date picker'} Type={ButtonType.PRIMARY}/>,
      onClick : handleClick
    }
]


    return(
        <CardWrapper className="card-block__elements1 ">

          { elements.map((el) => {
            return(
              <div className='element1-item'>
                <div className='element1-item__title'>{el.title}</div>
                <div onClick={el.onClick}>
                    <div>{el.button}</div>
                </div>
              </div>
            )
          })}
      </CardWrapper>
    )

}