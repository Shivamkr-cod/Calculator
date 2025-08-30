import styles from "./App.module.css";
import Display from "./component/Display";
import Btncontainer from "./component/Btncontainer";
import { useState } from "react";

function App() {
  const [calval, setvalue] = useState("");

  const onbuttonclick = (buttontext) => {
    if (buttontext === "C") {
      setvalue("");
    } else if (buttontext === "=") {
      const result = eval(calval);
      setvalue(result);
    } else {
      const newdisplayvalue = calval + buttontext;
      setvalue(newdisplayvalue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display display={calval}></Display>
      <Btncontainer onButtonClick={onbuttonclick}></Btncontainer>
    </div>
  );
}
export default App;
