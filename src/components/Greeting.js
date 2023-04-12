import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <Output>It's good to see you?</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change text</button>
    </div>
  );
};

export default Greeting;
