import { useState, useMemo } from "react";

const numbers = [...new Array(200000).keys()];

const List = ({ query }) => {
  const list = useMemo(() => (
    numbers
      .filter((i) => (
        query.length === 0 || i.toString().startsWith(query)
      ))
      .map(i => <p key={i}>{i}</p>)
  ), [query]);
  
  return <div>{list}</div>;
}

const App = () => {
  // (1) Use useTransition
  // (2) Define a new state for the query
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // (3) Use startTransition to defer the update of the query state
  };

  return (
    <div>
      <input type="number" onChange={handleChange} value={inputValue} min={0} />
      {/* (4) Use the pending flag and pass the query state as a prop */}
      <List query={inputValue} />
    </div>
  );
}

export default App;
