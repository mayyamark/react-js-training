import { useState, memo, useCallback, useMemo } from "react";

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

const MemoizedTitle = memo(Title);
const MemoizedButton = memo(Button);

const App = () => {
  const [count, setCount] = useState(0);

  // (3) Memoize value
  const value = useMemo(() => Math.random(), []);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  // (4) Memoize function
  const handleLog = useCallback(() => console.log("Hi"), []);

  console.log("App re-rendered", value);
  return (
    <div>
      <MemoizedTitle title="Counter" />
      <MemoizedButton onClick={handleIncrement}>Increment</MemoizedButton>
      <MemoizedButton onClick={handleDecrement}>Decrement</MemoizedButton>
      <MemoizedButton onClick={handleLog}>Log</MemoizedButton>
      <p>{count}</p>
    </div>
  );
};

export default App;
