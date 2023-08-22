import { useState } from "react";

// (1) Memoize Title component
const Title = ({ title }) => {
  console.log("Title re-rendered");
  return <h1>{title}</h1>;
};

// (2) Memoize Button component
const Button = (props) => {
  console.log(`Button ${props.children} re-rendered`);
  return <button {...props} />;
};

const App = () => {
  const [count, setCount] = useState(0);

  // (3) Memoize value
  const value = Math.random();

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  // (4) Memoize function
  const handleLog = () => console.log("Hi");

  console.log("App re-rendered", value);
  return (
    <div>
      <Title title="Counter" />
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
      <Button onClick={handleLog}>Log</Button>
      <p>{count}</p>
    </div>
  );
};

export default App;
