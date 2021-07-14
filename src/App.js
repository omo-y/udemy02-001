import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("APP");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  onChangeText = (e) => setText(e.target.value);

  onClickOpen = () => setOpen(!open);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
