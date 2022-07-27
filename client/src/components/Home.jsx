import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getText } from "../redux/actions";

function Home() {
  const dispatch = useDispatch();
  const texts = useSelector((state) => state.texts);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(getText(input));
  };
  return (
    <div>
      <input value={input} type="text" onChange={(e) => handleChange(e)} />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
      <div>Content</div>
      {texts &&
        texts.map((t) => {
          return <p>{t.text}</p>;
        })}
    </div>
  );
}

export default Home;
