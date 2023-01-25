import {useState, useRef} from 'react';
import './App.css'

import Btn from './components/Btn'

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function getNum(num) {
    inputRef.current.value += num.toString();
  }

  function getOps(sign) {
    inputRef.current.value += sign;
  }

  function clear() {
    inputRef.current.value = "";
  }

  function equal() {
    let expression = inputRef.current.value;
    inputRef.current.value = eval(expression);
  }

  return (
    <div className="main-div">
      <input readOnly
          pattern="[0-9]" 
          ref={inputRef} 
        /> 
      <div className="box">
        <Btn text="C" func={clear}/>
        <Btn text="0" func={() => getNum(0)}/>
        <Btn text="=" className="equal" func={equal}/>
        <Btn text="+" className="right" func={() => getOps('+')}/>
      </div>
      <div className="box">
        <Btn text="1" func={() => getNum(1)}/>
        <Btn text="2" func={() => getNum(2)}/>
        <Btn text="3" func={() => getNum(3)}/>
        <Btn text="-" className="right" func={() => getOps('-')}/>
      </div>
      <div className="box">
        <Btn text="4" func={() => getNum(4)}/>
        <Btn text="5" func={() => getNum(5)}/>
        <Btn text="6" func={() => getNum(6)}/>
        <Btn text="*" className="right" func={() => getOps('*')}/>
      </div>
      <div className="box">
        <Btn text="7" func={() => getNum(7)}/>
        <Btn text="8" func={() => getNum(8)}/>
        <Btn text="9" func={() => getNum(9)}/>
        <Btn text="/" className="right" func={() => getOps('/')}/>
      </div>
      
    </div>
  )
};

export default App;