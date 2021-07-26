import React from 'react';
import '../Stylesheets/Calculator.css';
import '../src/style.css';
const Calculator = () => {
  
  return (
    <>
      <div className="calculator-body">
        <div className="output">
          <div className="previousOperationText" >123</div>
          <div className="currentOperationText" >456</div>
        </div>
        <div className="operators">
          <button className="allClear span-two">AC</button>
          <button className="delete">DEL</button>
          <button className="operand">/</button>
          <button className="number">1</button>
          <button className="number">2</button>
          <button className="number">3</button>
          <button className="operand">*</button>
          <button className="number">4</button>
          <button className="number">5</button>
          <button className="number">6</button>
          <button className="operand">-</button>
          <button className="number">7</button>
          <button className="number">8</button>
          <button className="number">9</button>
          <button className="operand">+</button>
          <button className="number">0</button>
          <button className="number">.</button>
          <button className="equals span-two">=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
