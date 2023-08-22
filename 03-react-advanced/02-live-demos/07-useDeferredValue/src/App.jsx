import { useState, useMemo, useDeferredValue } from "react";

const numbers = [...new Array(200000).keys()];

const List = ({ query }) => {
  // (1) Use useDeferredValue to defer query
  const deferredQuery = useDeferredValue(query);

  const list = useMemo(() => (
    numbers
      .filter((i) => (
        // (2) Filter by the deferred value
        deferredQuery.length === 0 || i.toString().startsWith(deferredQuery)
      ))
      .map(i => <p key={i}>{i}</p>)
  ), [deferredQuery]);
  
  return <div>{list}</div>;
}

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="number" onChange={handleChange} value={inputValue} min={0} />
      <List query={inputValue} />
    </div>
  );
}

export default App;
