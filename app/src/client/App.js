import React, { useState, useEffect } from "react";

const App = (props) => {
  const [hide, setHide] = useState(false);
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //     (async () => {
  //         const response = await fetch('http://localhost:4000/items');
  //         const newItems = await response.json();

  //         setItems(newItems);
  //     })();
  // }, []);

  const handleClick = () => {
    setHide(!hide);
  };

  return (
    <div>
      <h1>Hola mundo</h1>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};

export default App;
