import './CardTest.css'

export const CardType = {
  FIRST: "first", 
  SECOND: "second", 
  THIRD: "third"
};

// TODO(Bekmina): стили CardWrapper подгонять 
// к типом карточек(как в компоненте Button)

export function CardBlock(props) {
    
  const classes = "card "+ props.className; 
  
  return <div className={classes}>{props.children}</div>
}

export const CardTest = (props) => {

  // прост card, отсылка в типе, map, elements снаружи
  // 1 компонент карточек

    return(
        <div>
            <div className={`card-${props.cardType}`}>
            {props.cardType === CardType.FIRST && (
                <div>
                    <div className='card-icon'>{props.icon}</div>
                    <div className="card-title">{props.title}</div>
                    <div className="card-text">{props.text}</div>
                </div>
            )}
            {props.cardType === CardType.SECOND && (
                <div>
                    <div className='card-icon'>{props.icon}</div>
                    <div className="card-title">{props.title}</div>
                </div>
            )}
            {props.cardType === CardType.THIRD && (
                <div>
                    <div className='card-icon'>{props.icon}</div>
                    <div className="card-title">{props.title}</div>
                    <div className="card-subtitle">{props.subtitle}</div>
                    <div className="card-text">{props.text}</div>
                </div>
            )}
            </div>
        </div>
    )
}
