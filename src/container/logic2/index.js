import React, {useState} from "react";

const Logic2 = () => {
  const [input, setInput] = useState()
  const addOperator = (op) => {
      const value = parseInt(document.getElementById('inputA').value);
      const value2 = parseInt(document.getElementById('inputB').value);
        let result = 0 ;
      if (op === '+') {
           result = value + value2;
          }else if(op === '-'){
           result = value - value2;
          }else if(op === 'x'){
           result = value * value2;
          }else if(op === ':'){
           result = value / value2;
          }
      setInput(result)
      

      document.getElementById('inputA').value = ''
      document.getElementById('inputB').value = ''
  }


  return (
      <div className="container">
        <div className="simple">
            <input type="text" value={input} placeholder="calculate" disabled />

        <br />
        {
            input != null ? (
            <input type="number" placeholder="input value" id="inputA" value={input} />
            ):(
                <input type="number" placeholder="input value" id="inputA"Z />
            )
        }
            <input type="number" placeholder="input value" id="inputB"/>
        <br />
        <button onClick={() => addOperator("+")}>+</button>
        <button onClick={() => addOperator("-")}>-</button>
        <button onClick={() => addOperator("x")}>x</button>
        <button onClick={() => addOperator(":")}>:</button>
        
        </div>
      </div>
  );
};

export default Logic2;
