import React, { useState, useEffect } from "react";

const App = () => {
  const [int, setInt] = useState(null);
  const [float, setFloat] = useState(null);

  // Sync Function call
  const handleClick = () => {
    setInt(3);
    setFloat(3.3);
  };

  // Async Function call
  // const handleClick = () => {
  //   new Promise((res) => {
  //     setTimeout(() => res({ int: 3, float: 3.3 }), 1000)
  //   })
  //     .then((data) => {
  //       setInt(data.int);
  //       setFloat(data.float);
  //     });
  // };

  useEffect(() => {
    console.log(`UseEffect Called: numbers ${int}, ${float}`);
  }, [int, float]);

  return (
    <div>
      <p>Int: {int}</p>
      <p>Float: {float}</p>
      <button onClick={handleClick}>Print numbers</button>
    </div>
  );
}

export default App;
