import { useState } from "react";
import ButtonItem from "./components/ButtonItem";

function App() {
  const [display, setDisplay] = useState(0);
  function handleClick(e) {
    if (e.target.tagName === "BUTTON") {
      const pressedBtn = e.target.value;
      display === 0 ? setDisplay(pressedBtn) : setDisplay(display + pressedBtn);

      switch (pressedBtn) {
        case "=":
          setDisplay(eval(display).toString());
          break;
        case "AC":
          setDisplay(0);
          break;
        case "C":
          setDisplay(display.slice(0, display.length - 1));
          break;
        default:
          break;
      }
    }
  }
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
