import "./Button.css";
import Loader from "./Loader";
import {useState} from "react";
import {PropTypes} from 'prop-types';

export const ButtonType = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  LINE: "line"
};


export const Button = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (e) => {
        setIsLoading(true);

    setTimeout(() => {
        setIsLoading(false);
        }, 5000);
    };

    const defaultButtonType = ButtonType.PRIMARY;

  return(
    <div className={`
        button button-${props.type || defaultButtonType}`}>
        {props.icon && <div className="button-icon">{props.icon}</div>} 
        {props.Type === ButtonType.PRIMARY && (
          <div className=" button-text" onClick={handleClick}>
              <div className="button-text">{props.text}</div>
          </div>
        )}
        {props.Type === ButtonType.SECONDARY && (
          <div className="button-text__border" onClick={handleClick}>
              <div className="button-text__border">{props.text}</div>
          </div>
        )}
        {props.Type === ButtonType.LINE && (
          <div className="button-line__text">{props.text}</div>
        )}
    </div>
  )

}

Button.propTypes = {
    type:PropTypes.oneOf([
        ButtonType.PRIMARY, 
        ButtonType.SECONDARY, 
        ButtonType.LINE
      ]).isRequired,
      text: PropTypes.string,
      icon: PropTypes.element,
}