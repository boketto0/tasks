import './ParentBlock.css'
import { CardTest } from './CardTest';
import { CardType } from './CardTest';
import { CardBlock } from './CardTest';

function ParentBlock(props) {

  const elements = [
    {
      title: 'Button',
      text: "1"
    },
    {
      title: 'Alerts',
      text: "2"
    },
    {
      title: 'Button group',
      text: "3"
    },
    {
      title: 'Modal',
      text: "4"
    },
    {
      title: 'Date picker',
      text: "5"
    }
]

  return(
    <CardBlock>

      { elements.map((el) => {
            return(
            <CardTest title={el.title} text={el.text} cardType={CardType.FIRST}/>
            )
          })}
    </CardBlock>
  );
  }
  
  export default ParentBlock;