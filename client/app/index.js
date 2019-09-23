import React, {useState} from 'react'; 
import ReactDOM from 'react-dom'; 

import App from './components/App'; 

function Example() {
    // Объявление переменной состояния, которую мы назовём "count"
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Вы кликнули {count} раз</p>
        <button onClick={() => setCount(count + 1)}>
          +
        </button>
        <button onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    );
  }

ReactDOM.render(<Example/>, document.getElementById('root')); 