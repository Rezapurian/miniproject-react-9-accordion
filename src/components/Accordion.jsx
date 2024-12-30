import React, {useState} from 'react';
import Data from './Data.js';
import './Accordion.css'

function Accordion() {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i)
    }

  return (
      <div className='accordion'>
          {Data.map((item, index) => (
              <div key={index} className='item'>
                  <div className='title' onClick={() => toggle(index)}>
                      <h2>{item.question}</h2>
                      <span>{selected === index ? '-' : '+'}</span>
                  </div>
                  <div className={selected === index ? 'content show' : 'content'}>{item.answer}</div>
              </div>
          ))}
    </div>
  )
}

export default Accordion;