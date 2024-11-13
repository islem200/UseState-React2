import React, { useState } from "react";

const Counter = () => {
  const [x, setX] = useState(0);
  const[isDark, setIsDark] = useState(false)

  const handleCount = () => {
    setX((x) => x + 1);
  };
  const handledecrument = () => {
    setX((x) => x - 1);
  };

  const handleMode = () =>{
    setIsDark((isDark) => !isDark);
  };

  return (
    <div className={`${isDark === true?"dark": ""}`}>
      <h1>{x}</h1>

      <button onClick={handleCount} type="button" className="btn btn-primary">
        Count
      </button>

      <button
        onClick={handledecrument}
        type="button"
        className="btn btn-info"
      >
        Decrument
      </button>
      <button onClick={handleMode} type="button" className="btn btn-danger">
        Change Mode
      </button>
    </div>
  );
};

export default Counter;
