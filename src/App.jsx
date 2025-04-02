import { useState } from "react";
import ButtonItem from "./components/ButtonItem";

function App() {
  const [display, setDisplay] = useState(0);
  const botones = [
    "7",
    "8",
    "9",
    "AC",
    "4",
    "5",
    "6",
    "C",
    "1",
    "2",
    "3",
    "/",
    "-",
    "0",
    "+",
    "*",
    "=",
  ];
  const operadores = ["/", "*", "-", "+", "C", "AC", "="];

  function handleClick(e) {
    if (e.target.tagName !== "BUTTON") return;

    const lastValue = display[display.length - 1];
    const pressedBtn = e.target.value;
    if (display === 0 && operadores.includes(pressedBtn)) {
      return;
    }
    if (operadores.includes(pressedBtn) && operadores.includes(lastValue))
      return;
    
    display === 0 ? setDisplay(pressedBtn) : setDisplay(display + pressedBtn);

    switch (pressedBtn) {
      case "=":
        setDisplay(eval(display).toString());
        break;
      case "AC":
        setDisplay(0);
        break;
      case "C":
        setDisplay(display.slice(0, display.length - 1) || 0);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="calculator">
        <input
          type="text"
          className="display"
          id="display"
          value={display}
          readOnly
        />
        <div className="buttons" onClick={handleClick}>
          {botones.map((itemBtn, i) => (
            <ButtonItem value={itemBtn} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
