import {Button, ButtonType} from "./Button";
import './App.css';

export default function Home() {

    const text = 'Click'
    const type = ButtonType.PRIMARY;
    
    return(
        <div className="home">
            <Button type={type} text={text} Type={ButtonType.PRIMARY}/>
        </div>
    )
    }